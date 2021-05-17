import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Layout from '../components/common/Layout'
import PostList from '../components/post/PostList'
import { getSortedPostsData, Post } from '../lib/posts'
import { styled as muiStyled } from '@material-ui/core/styles'
import { Typography, withTheme } from '@material-ui/core'
import { DefaultTheme } from '../theme/Theme'

const Title = muiStyled(withTheme(Typography))((props: DefaultTheme) => ({
  color: props.theme.app.title,
  marginBottom: '50px',
  fontFamily: 'sunspots',
}))

type TagProps = {
  posts: Post[]
}
export default function Tag({ posts }: TagProps) {
  const router = useRouter()
  const tag = router.query.tag as string

  if (!tag) {
    return <></>
  }
  return (
    <Layout>
      <Title variant="h2">#{tag}</Title>
      <PostList posts={posts.filter((post) => post.tags.indexOf(tag) != -1)} />
    </Layout>
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
