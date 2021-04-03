import Head from 'next/head'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import { Date, Header, Layout } from '../components'
import React from 'react'

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image } = post
  return (
    <>
      <Header />
      <Layout maxWidth="md">
        <article>
          <h1 className={utilStyles.headingXl}>{title}</h1>
          <div className={utilStyles.lightText}>
            <Date date={date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
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
