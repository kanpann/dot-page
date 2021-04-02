import Head from 'next/head'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import { Date, Layout } from '../components'

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date date={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
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
