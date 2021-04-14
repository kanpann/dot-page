import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import { DateView, Layout } from '../components'
import { Grid, Hidden, Typography } from '@material-ui/core'
import { SideMenuBar } from '../components/SideMenuBar'
import styled from 'styled-components'
import 'highlight.js/styles/atom-one-dark.css'
import { Comments } from '../components/Comments'

const Content = styled.div`
  a {
    text-decoration: none;
    color: #3535f7;
    font-weight: bold;
  }
  h1 {
    border-left: 5px solid #99cfff;
    padding-left: 10px;
  }
  p code {
    background: #dadada;
    padding: 0px 5px;
    font-weight: bold;
  }
`

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image } = post

  return (
    <>
      <Layout>
        <Typography variant="h3" style={{ fontFamily: 'nanumSquare' }}>
          {title}
        </Typography>
        <DateView date={date} />
        <hr />
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <Comments />
      </Layout>
    </>
  )
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const post: PostType = await getPostData(params.id)
  return {
    props: {
      post,
    },
  }
}
