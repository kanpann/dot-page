import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { PostList, Layout } from '../components'
import { SideMenuBar } from '../components/SideMenuBar'
import { getSortedPostsData, Post } from '../lib/posts'

type HomeProps = {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
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
