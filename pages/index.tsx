import React from 'react'
import { Grid } from '@material-ui/core'
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
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid xs={3}>
            <SideMenuBar />
          </Grid>
          <Grid xs={9}>
            <PostList posts={posts} />
          </Grid>
        </Grid>
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
