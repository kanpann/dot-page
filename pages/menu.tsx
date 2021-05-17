import { getSortedPostsData, Post } from '../lib/posts'
import { Category, CategoryInfo } from '../site.config'
import styled, { PostHeaderTheme } from 'styled-components'
import React from 'react'
import PostList from '../components/post/PostList'
import Layout from '../components/common/Layout'
import { useRouter } from 'next/dist/client/router'

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
  font-family: 'sunspots';
`
const DateFrame = styled.div`
  font-size: 1.125em;
  color: #ffffffc2;
  padding: 0px 30px;
`

type MenuProps = {
  posts: Post[]
}
export default function Menu({ posts }: MenuProps) {
  const router = useRouter()
  const menu = router.query.menu as string
  const topMenu = router.query.topMenu as string

  if (!menu) {
    return <></>
  }

  const categoryInfo = CategoryInfo[menu]

  let subCategorys = topMenu ? [] : Category[menu].sub

  return (
    <Layout>
      <PostHeader image={categoryInfo.image}>
        <PostHeaderFrame>
          <PostTitle>{topMenu ? topMenu + '/' + menu : menu}</PostTitle>
          <DateFrame>{categoryInfo.descript}</DateFrame>
        </PostHeaderFrame>
      </PostHeader>
      <PostList
        posts={posts.filter(
          (post) => subCategorys.indexOf(post.category) != -1 || post.category == menu,
        )}
      />
    </Layout>
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
