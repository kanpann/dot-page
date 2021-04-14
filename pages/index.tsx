import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import PostList from '../components/post/PostList'
import SideMenuBar from '../components/common/SideMenuBar'
import { getSortedPostsData, Post } from '../lib/posts'
import Layout from '../components/common/Layout'

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
