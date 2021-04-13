import { Grid } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Layout, PostList } from '../components'
import { SideMenuBar } from '../components/SideMenuBar'
import { getSortedPostsData, Post } from '../lib/posts'
import styled, { PostHeaderTheme } from 'styled-components'

const PostHeader = styled.div`
  background-size: cover;
  background-position: center;
  height: 20rem;
  margin-bottom: 2rem;
  background-image: ${(props: PostHeaderTheme) => `url(${props.image})`};
`
const PostHeaderFrame = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
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

type CategoryProps = {
  posts: Post[]
}
export default function Category({ posts }: CategoryProps) {
  const router = useRouter()
  const category = router.query.category

  const categoryPosts = posts.filter((post) => post.category == category)
  return (
    <>
      <Layout>
        <PostHeader
          image={
            'https://user-images.githubusercontent.com/45007556/103328175-0e958b80-4a9b-11eb-9db7-66230e0f057c.png'
          }
        >
          <PostHeaderFrame>
            <PostTitle>Spring</PostTitle>
            <DateFrame>스프링에 대한 글들을 모아놓은 카테고리입니다.</DateFrame>
          </PostHeaderFrame>
        </PostHeader>
        <PostList posts={categoryPosts} />
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
