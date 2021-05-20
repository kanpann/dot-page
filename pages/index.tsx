import React from 'react'
import PostList from '../components/post/PostList'
import { getSortedPostsData, Post } from '../lib/posts'
import Layout from '../components/common/Layout'
import generateRss from '../lib/feed'

type HomeProps = {
  posts: Post[]
}
const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getSortedPostsData()
  generateRss(posts)
  return {
    props: {
      posts,
    },
  }
}
export default Home
