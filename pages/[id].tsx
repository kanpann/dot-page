import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import DateView from '../components/post/DateView'
import { Chip } from '@material-ui/core'
import styled from 'styled-components'
import 'highlight.js/styles/atom-one-dark.css'
import Comments from '../components/post/Comments'
import Layout from '../components/common/Layout'
import { DefaultTheme } from '../theme/Theme'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 2.4rem;
  font-family: nanumSquare;
  line-height: 50px;
  margin: 0px;
  word-break: keep-all;
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
  }
  p {
    color: ${(props: DefaultTheme) => props.theme.app.font};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props: DefaultTheme) => props.theme.app.title};
    line-height: 40px;
    word-break: keep-all;
  }
  p code {
    background: #dadada;
    padding: 0px 5px;
    font-weight: bold;
    color: black;
  }
  img {
    background: white;
  }
  pre {
    padding: 15px;
    border-radius: 5px;
  }
`
const TagFrame = styled.div`
  margin-bottom: 20px;
  color: ${(props: DefaultTheme) => props.theme.app.title};
`

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, tags, category } = post

  return (
    <>
      <Layout>
        <Title>{title}</Title>
        <DateView date={date} />
        <hr />
        <TagFrame>
          <Chip
            key={category}
            style={{ marginRight: '5px' }}
            label={category}
            component="a"
            color="primary"
          />
          {tags.length > 0 ? '|   ' : ''}
          {tags.map((tag) => (
            <Link href={'/tag?tag=' + tag}>
              <Chip
                key={tag}
                style={{ marginRight: '5px' }}
                label={tag}
                component="a"
                clickable
                color="secondary"
              />
            </Link>
          ))}
        </TagFrame>
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
