import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import matter, { GrayMatterFile } from 'gray-matter'
import { Post } from './posts'
import { getByteLength, substrToByte } from './common-util'

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
export const sort = (posts: Post[]) => {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
export const getExcept = (target: string, maxByte: number): string => {
  const except: string = substrToByte(target, maxByte);
  return except + (getByteLength(target) > maxByte ? '...':'')
}