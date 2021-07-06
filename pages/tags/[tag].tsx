import React from 'react'
import { findPostDataByTag, getAllTags } from '../../lib/posts'
import { Post } from '../../lib/types'
import { useRouter } from 'next/dist/client/router'
import Layout from '../../components/common/Layout'
import MyHelmet from '../../components/common/MyHelmet'
import { styled as muiStyled } from '@material-ui/core/styles'
import { Typography, withTheme } from '@material-ui/core'
import { DefaultTheme } from '../../theme/Theme'
import PostList from '../../components/post/PostList'
import MyPagination from '../../components/common/MyPagination'
import PagingUtil from '../../lib/paging-util'

const Title = muiStyled(withTheme(Typography))((props: DefaultTheme) => ({
  color: props.theme.app.title,
  marginBottom: '50px',
  fontFamily: 'sunspots',
}))
type TagProps = {
  posts: Post[]
  tag: string
}
const Tag = ({ posts, tag }: TagProps) => {
  const router = useRouter()
  const page = Number(router.query.page as string) || 1

  const util = new PagingUtil(page, posts)
  const { result, totalPage } = util
  return (
    <Layout>
      <MyHelmet title={`'${tag}'태그의 글 목록`} content={`'${tag}'태그의 글 목록입니다.`} />
      <Title variant="h2" align="center">
        #{tag}
      </Title>
      <PostList posts={result} />
      <hr />
      <MyPagination target={`/tags/${tag}`} page={page} totalPage={totalPage} />
    </Layout>
  )
}
export const getStaticPaths = async () => {
  const paths = await getAllTags()
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  const tag = params.tag
  const posts = await findPostDataByTag(tag)

  return {
    props: {
      posts,
      tag,
    },
  }
}
export default Tag
