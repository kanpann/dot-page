import React from 'react'
import { Header, PostList, Layout } from '../components'
import { getSortedPostsData, Post } from '../lib/posts'
import Pagination from '@material-ui/lab/Pagination'

type HomeProps = {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <Layout>
        <PostList posts={posts} />
        <Pagination count={10} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}
