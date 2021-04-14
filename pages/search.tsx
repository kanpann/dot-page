import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import PostList from '../components/post/PostList'
import SideMenuBar from '../components/common/SideMenuBar'
import { getSortedPostsData, Post } from '../lib/posts'
import Layout from '../components/common/Layout'
import { useRouter } from 'next/dist/client/router'

type SearchProps = {
  posts: Post[]
}
export default function Search({ posts }: SearchProps) {
  const router = useRouter()
  const keyword: any = router.query.keyword

  return (
    <>
      <Layout>
        <PostList
          posts={posts.filter((post) => {
            return post.title.indexOf(keyword) > 0 || post.content.indexOf(keyword) > 0
          })}
        />
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
