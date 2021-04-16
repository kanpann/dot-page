import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import DateView from '../components/post/DateView'
import { Chip, Typography } from '@material-ui/core'
import styled from 'styled-components'
import 'highlight.js/styles/atom-one-dark.css'
import Comments from '../components/post/Comments'
import Layout from '../components/common/Layout'

const Content = styled.div`
  a {
    text-decoration: none;
    color: #3535f7;
    font-weight: bold;
  }
  h1 {
    border-bottom: 3px solid #dcdcdc;
  }
  p code {
    background: #dadada;
    padding: 0px 5px;
    font-weight: bold;
  }
  pre {
    padding: 15px;
    border-radius: 10px;
  }
`
const TagFrame = styled.div`
  margin: 20px 0px;
`

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image, tags } = post

  return (
    <>
      <Layout>
        <Typography variant="h3" style={{ fontFamily: 'nanumSquare', wordBreak: 'break-all' }}>
          {title}
        </Typography>
        <TagFrame>
          {tags.map((tag) => (
            <Chip
              key={tag}
              style={{ marginRight: '5px' }}
              label={tag}
              component="a"
              href="#chip"
              clickable
              color="primary"
            />
          ))}
        </TagFrame>
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
