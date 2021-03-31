import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory: string = path.join(process.cwd(), 'posts')

export interface Post {
  id: string;
  title: string;
  content: string | ''
  date: string;
}

export function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  const allPostsData: Post[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(postsDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult: matter.GrayMatterFile<string> = matter(fileContents)

    const { title, date } = matterResult.data;
    return {
      id,
      title: title,
      date: date
    }
  })
  //정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath: string = path.join(postsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult: matter.GrayMatterFile<string> = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml: string = processedContent.toString()

  const { title, date } = matterResult.data;
  return {
    id,
    content:contentHtml,
    title: title,
    date: date
  }
}
