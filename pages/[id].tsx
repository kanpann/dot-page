import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import { DateView, Layout } from '../components'
import { Grid, Typography } from '@material-ui/core'
import { SideMenuBar } from '../components/SideMenuBar'
import styled from 'styled-components'
import 'highlight.js/styles/atom-one-dark.css'

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
`

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image } = post

  return (
    <>
      <Layout>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid xs={3}>
            <SideMenuBar />
          </Grid>
          <Grid xs={9}>
            <Typography variant="h3" style={{ fontFamily: 'nanumSquare' }}>
              {title}
            </Typography>
            <DateView date={date} />
            <hr />
            <Content dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
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
