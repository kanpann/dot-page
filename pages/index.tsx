import React from 'react'
import PostList from '../components/post/PostList'
import { getSortedPostsData, Post } from '../lib/posts'
import Layout from '../components/common/Layout'
import { useRouter } from 'next/dist/client/router'
import styled, { PostHeaderTheme } from 'styled-components'
import { CategoryInfo } from '../site.config'

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

type HomeProps = {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  const router = useRouter()
  const { keyword, menu } = router.query

  let printPosts
  if (keyword) {
    printPosts = (
      <PostList
        posts={posts.filter((post) => {
          return post.title.indexOf(keyword) > 0 || post.content.indexOf(keyword) > 0
        })}
      />
    )
  } else if (menu) {
    const categoryInfo = CategoryInfo[menu]
    printPosts = (
      <>
        <PostHeader image={categoryInfo.image}>
          <PostHeaderFrame>
            <PostTitle>{menu}</PostTitle>
            <DateFrame>{categoryInfo.descript}</DateFrame>
          </PostHeaderFrame>
        </PostHeader>
        <PostList posts={posts.filter((post) => post.category == menu)} />
      </>
    )
  } else {
    printPosts = <PostList posts={posts} />
  }
  return (
    <>
      <Layout>{printPosts}</Layout>
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
