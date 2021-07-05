import React from 'react'
import { getAllPostIds, getPostData } from '../lib/posts'
import DateView from '../components/post/DateView'
import 'highlight.js/styles/atom-one-dark.css'
import Comments from '../components/post/Comments'
import Layout from '../components/common/Layout'
import { Post as PostType } from '../lib/types'
import { SiteMeta } from '../site.config'
import MyHelmet from '../components/common/MyHelmet'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Link from 'next/link'
import { Category, Title, Tags, Toc, Content } from '../styles/PostStyle'

type PostProps = {
  post: PostType
}
const Post = ({ post }: PostProps) => {
  const { clientID, clientSecret, repo, owner, admin } = SiteMeta.gitalk
  const { title, date, content, tags, category, image, toc } = post

  return (
    <Layout>
      <MyHelmet title={title} content={content.substr(0, 50)} image={image} />
      <Category>{category}</Category>
      <hr />
      <Title>{title}</Title>
      <DateView date={date} />
      <Tags>
        <LocalOfferIcon fontSize="inherit" titleAccess="태그" />
        {tags &&
          tags.map((tag, index) => (
            <Link key={index} href={'/tag?tag=' + tag}>
              <a href="3">#{tag}</a>
            </Link>
          ))}
      </Tags>
      <Toc dangerouslySetInnerHTML={{ __html: toc!! }} />
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Comments
        clientID={clientID}
        clientSecret={clientSecret}
        repo={repo}
        owner={owner}
        admin={admin}
      />
    </Layout>
  )
}
export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  const post: PostType = await getPostData(params.id)
  return {
    props: {
      post,
    },
  }
}
export default Post
