import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import matter, { GrayMatterFile } from 'gray-matter'
import { Post } from './posts'

const postsDirectory: string = path.join(process.cwd(), 'posts')

export const getFileNames = (): string[] => { return fs.readdirSync(postsDirectory) }

export const getPostData = (fileName: string): GrayMatterFile<string> => {
  const fullPath: string = path.join(postsDirectory, fileName)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  return matter(fileContents);
}
export const getContents = async (content: string): Promise<string> => {
  const processedContent = await remark()
    .use(html)
    .process(content)
  return processedContent.toString()
}
export const getExcerpt = async (content: string): Promise<string> => {
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
export const sort = (posts: Post[]) => {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}