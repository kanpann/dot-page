import React, { memo } from 'react'
import PostList from '../components/post/PostList'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../lib/types'
import Layout from '../components/common/Layout'
import generateRss from '../lib/meta/feed'
import generateSitemap from '../lib/meta/sitemap'
import generateRobots from '../lib/meta/robots'
import PagingUtil from '../lib/paging-util'
import { useRouter } from 'next/dist/client/router'
import MyPagination from '../components/common/MyPagination'

type HomeProps = {
  posts: Post[]
}
const Home = ({ posts }: HomeProps) => {
  const router = useRouter()
  const page = Number(router.query.page as string) || 1

  const util = new PagingUtil(page, posts)
  const { result, totalPage } = util
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
