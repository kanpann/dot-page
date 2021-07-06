import React, { memo } from 'react'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../types/post'
import { Layout, MyPagination } from '../components/common'
import { PostList } from '../components/post'
import { generateRss, generateRobots, generateSitemap } from '../lib/meta'
import PagingUtil from '../lib/paging-util'
import { useRouter } from 'next/dist/client/router'

type HomeProps = {
  posts: Post[]
}
const Home = ({ posts }: HomeProps) => {
  const router = useRouter()
  const page: number = Number(router.query.page as string) || 1

  const util = new PagingUtil(page, posts)
  const { result, totalPage }: { result: Post[]; totalPage: number } = util
  return (
    <Layout>
      <PostList posts={result} />
      <hr />
      <MyPagination page={page} totalPage={totalPage} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getSortedPostsData()
  generateRss(posts)
  generateSitemap(posts)
  generateRobots()

  return {
    props: {
      posts,
    },
  }
}
export default memo(Home)
