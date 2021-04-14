import React from 'react'
import PostList from '../components/post/PostList'
import { getSortedPostsData, Post } from '../lib/posts'
import Layout from '../components/common/Layout'
import { useRouter } from 'next/dist/client/router'
import styled, { PostHeaderTheme } from 'styled-components'
import { CategoryInfo } from '../site.config'
import { Typography } from '@material-ui/core'

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
  padding: 0px 30px;
`

type HomeProps = {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  const router = useRouter()
  const keyword = router.query.keyword as string
  const menu = router.query.menu as string
  const topMenu = router.query.topMenu as string

  let printPosts
  if (keyword) {
    posts = posts.filter((post) => {
      return post.title.indexOf(keyword) > 0 || post.content.indexOf(keyword) > 0
    })

    printPosts =
      posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <Typography variant="h5" align="center">
          검색 결과가 없습니다.
          <br /> 검색 알고리즘이 그리 좋지 않으니 키워드 위주로 검색해주세요!
        </Typography>
      )
  } else if (menu) {
    const categoryInfo = CategoryInfo[menu]
    printPosts = (
      <>
        <PostHeader image={categoryInfo.image}>
          <PostHeaderFrame>
            <PostTitle>
              {topMenu && topMenu + '/' + menu}
              {!topMenu && menu}
            </PostTitle>
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
