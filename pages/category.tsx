import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Header, Layout, PostList } from '../components'
import { getSortedPostsData, Post } from '../lib/posts'

type CategoryProps = {
  posts: Post[]
}
export default function Category({ posts }: CategoryProps) {
  const router = useRouter()
  const category = router.query.category

  return (
    <>
      <Header />
      <Layout>
        <PostList posts={posts.filter((post) => post.category === category)} />
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
