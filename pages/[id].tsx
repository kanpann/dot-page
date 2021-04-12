import React from 'react'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import { Layout } from '../components'

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image } = post

  return (
    <>
      <Layout maxWidth="md">
        <span>
          {title}
          {date}
        </span>
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
