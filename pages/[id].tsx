import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import { Date, Header, Layout } from '../components'
import styled, { PostHeaderTheme } from 'styled-components'

const PostHeader = styled.div`
  background-size: cover;
  background-position: center;
  height: 20rem;
  margin-bottom: 2rem;
  background-image: ${(props: PostHeaderTheme) => `url(${props.image})`};
`
const PostHeaderFrame = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const PostTitle = styled.div`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 3.2rem;
  word-break: break-word;
  color: #fff;
`
const DateFrame = styled.div`
  font-size: 1.125em;
  color: #ffffffc2;
`
type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image } = post

  return (
    <>
      <Header />
      <Layout maxWidth="md">
        <PostHeader image={image}>
          <PostHeaderFrame>
            <PostTitle>{title}</PostTitle>
            <DateFrame>
              <span>
                <Date date={date} />
              </span>
            </DateFrame>
          </PostHeaderFrame>
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: content }} />
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
