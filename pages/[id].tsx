import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import DateView from '../components/post/DateView'
import { Chip, Typography } from '@material-ui/core'
import styled from 'styled-components'
import 'highlight.js/styles/atom-one-dark.css'
import Comments from '../components/post/Comments'
import Layout from '../components/common/Layout'
import { DefaultTheme } from '../theme/Theme'

const Title = styled.h3`
  font-size: 2rem;
  font-family: nanumSquare;
  line-height: 70px;
  margin: 0px;
  word-break: break-all;
  color: ${(props: DefaultTheme) => props.theme.app.title};
`
const Content = styled.div`
  color: ${(props: DefaultTheme) => props.theme.app.font};
  a {
    text-decoration: none;
    color: #3535f7;
    font-weight: bold;
  }
  h1 {
    border-bottom: 3px solid #dcdcdc;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 40px;
    color: ${(props: DefaultTheme) => props.theme.app.title};
  }
  p code {
    background: #dadada;
    padding: 0px 5px;
    font-weight: bold;
  }
  img {
    background: white;
  }
  pre {
    padding: 15px;
    border-radius: 10px;
  }
`
const TagFrame = styled.div`
  margin-bottom: 20px;
`

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image, tags } = post

  return (
    <>
      <Layout>
        <DateView date={date} />
        <Title>{title}</Title>
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
