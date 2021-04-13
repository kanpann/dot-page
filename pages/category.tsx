import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Layout, PostList } from '../components'
import { getSortedPostsData, Post } from '../lib/posts'
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

type CategoryProps = {
  posts: Post[]
}
export default function Category({ posts }: CategoryProps) {
  const router = useRouter()
  const { menu } = router.query

  const categoryPosts = posts.filter((post) => post.category == menu)

  const categoryInfo = CategoryInfo[menu]
  return (
    <>
      <Layout>
        {categoryInfo && (
          <PostHeader image={categoryInfo.image}>
            <PostHeaderFrame>
              <PostTitle>{menu}</PostTitle>
              <DateFrame>{categoryInfo.descript}</DateFrame>
            </PostHeaderFrame>
          </PostHeader>
        )}
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
