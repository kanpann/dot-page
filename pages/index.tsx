import { Avatar, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { PostList, Layout, Header, DateView } from '../components'
import { HCategories } from '../components/HCategories'
import { SideMenuBar } from '../components/SideMenuBar'
import { getSortedPostsData, Post } from '../lib/posts'
import { SiteMeta } from '../site.config'
import styled, { PostHeaderTheme } from 'styled-components'

type HomeProps = {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Layout>
        <Header />
        <Link href="/">
          <img
            style={{ margin: '0 auto', marginTop: '10px', marginBottom: '100px' }}
            src="/images/logo.png"
          />
        </Link>
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
