import React from 'react'
import { Header, PostList, Layout } from '../components'
import { getSortedPostsData, Post } from '../lib/posts'

type HomeProps = {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <Layout>
        <PostList posts={posts} />
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
