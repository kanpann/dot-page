import { GrayMatterFile } from "gray-matter";
import { removeHtml } from "./common-util";
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

  const postData: GrayMatterFile<string> = util.getPostData(fileName);
  const { title, date, image } = postData.data

  //Markdown 파일 전체 내용
  const content = postData.content

  //Markdown 파일을 Html로 파싱한 내용을 가져옴
  let excerpt: string = await util.getContents(content)

  //Html 요소 제거
  excerpt = removeHtml(excerpt);
  //내용을 280바이트까지 자름
  excerpt = util.getExcept(excerpt, 280);

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
    post.title = util.getExcept(post.title, 40);
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
