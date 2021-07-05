import React from 'react'
import { findPostDataByTag, getAllTagIds } from '../../lib/posts'
import { Post } from '../../lib/types'
import { useRouter } from 'next/dist/client/router'
import Layout from '../../components/common/Layout'
import MyHelmet from '../../components/common/MyHelmet'
import { styled as muiStyled } from '@material-ui/core/styles'
import { Typography, withTheme } from '@material-ui/core'
import { DefaultTheme } from '../../theme/Theme'
import PostList from '../../components/post/PostList'

const Title = muiStyled(withTheme(Typography))((props: DefaultTheme) => ({
  color: props.theme.app.title,
  marginBottom: '50px',
  fontFamily: 'sunspots',
}))
type TagProps = {
  posts: Post[]
  id: string
}
const Tag = ({ posts, id }: TagProps) => {
  return (
    <Layout>
      <MyHelmet title={`'${id}'태그의 글 목록`} content={`'${id}'태그의 글 목록입니다.`} />
      <Title variant="h2" align="center">
        #{id}
      </Title>
      <PostList posts={posts} />
    </Layout>
  )
}
export const getStaticPaths = async () => {
  const paths = await getAllTagIds()
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  const id = params.id
  const posts = await findPostDataByTag(id)

  return {
    props: {
      posts,
      id,
    },
  }
}
export default Tag
