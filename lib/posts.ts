import { GrayMatterFile } from "gray-matter";
import * as util from "./posts-util"

export interface Post {
  id: string;
  title: string;
  content: string | ''
  date: string;
  image: string;
}
const getPostByFileName = async (fileName: string): Promise<Post> => {
  const id: string = fileName.replace(/\.md$/, '')

  const { title, date, image, content } = util.getPostData(fileName).data;
  let excerpt: string = await util.getExcerpt(content)
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
  const fileNames: string[] = util.getFileNames()
  const posts: Array<Post> = new Array()

  for(let i = 0; i < fileNames.length; i++){
    const fileName = fileNames[i]
    const post: Post = await getPostByFileName(fileName);
    posts.push(post)
  }
  return util.sort(posts)
}

export const getAllPostIds = () => {
  const fileNames: string[] = util.getFileNames()
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getPostData = async (id: string): Promise<Post> => {
  const fileName = `${id}.md`

  const { title, date, image, content } = util.getPostData(fileName).data
  const contentHtml = await util.getContents(content)
  return {
    id,
    content: contentHtml,
    title: title,
    date: date,
    image: image
  }
}
