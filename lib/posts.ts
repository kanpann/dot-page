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
  image: string;
}

const getExcerpt = async (content: string): Promise<string> => {
  const processedContent = await remark().use(html).process(content)
  let contentHtml: string = processedContent.toString()
  
  contentHtml = ((maxByte = 280) => {
    let buffer = 0;
    let idx = 0;
    while (true) {
      const unicode = contentHtml.charCodeAt(idx);
      buffer += unicode > 127 ? 2 : 1;
  
      if (buffer > maxByte) break;
      idx++;
    }
    return contentHtml = contentHtml.substring(0, idx)+".....";
  })()

  return contentHtml;
}
const getPostByFileName = async (fileName: string): Promise<Post> => {
  const id: string = fileName.replace(/\.md$/, '')

  const fullPath: string = path.join(postsDirectory, fileName)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  const matterResult: matter.GrayMatterFile<string> = matter(fileContents)
  
  const { title, date, image } = matterResult.data;
  let excerpt: string = await getExcerpt(matterResult.content)
  excerpt = excerpt.replace(/(<([^>]+)>)/ig,"")

  return {
    id,
    title: title,
    content: excerpt,
    date: date,
    image: image
  }
}

export const getSortedPostsData = async (): Promise<Post[]> => {
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  const allPostsData: Array<Post> = new Array()
  for(let i = 0; i < fileNames.length; i++){
    const fileName = fileNames[i]
    const post: Post = await getPostByFileName(fileName);
    allPostsData.push(post)
  }
  //정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPostIds = () => {
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getPostData = async (id: string): Promise<Post> => {
  const fullPath: string = path.join(postsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  const matterResult: matter.GrayMatterFile<string> = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml: string = processedContent.toString()

  const { title, date, image } = matterResult.data;
  return {
    id,
    content: contentHtml,
    title: title,
    date: date,
    image: image
  }
}
