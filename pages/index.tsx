import { Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import { Header } from '../components/Header'
import { PostList } from '../components/PostList'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../lib/posts'
import Pagination from '@material-ui/lab/Pagination'
import Layout from '../components/layout'

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
