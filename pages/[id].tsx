import React from 'react'
import Head from 'next/head'
import { getAllPostIds, getPostData, Post as PostType } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import { Date, Header, Layout } from '../components'
import styled from 'styled-components'

const TitleImage = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.color})` || ''};
  height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
`
const TitleImageCover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`
const Content = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  z-index: 2;
  text-align: center;
`
const DateText = styled.div`
  font-size: 1.5rem;
`

type PostProps = {
  post: PostType
}
export default function Post({ post }: PostProps) {
  const { title, date, content, image } = post

  return (
    <>
      <Header />
      <Layout maxWidth="md">
        <TitleImage color={image}>
          <TitleImageCover />
        </TitleImage>
        <Content>
          <h1 className={utilStyles.headingXl}>{title}</h1>
          <DateText>
            <Date date={date} />
          </DateText>
        </Content>
        <article>
          {/* <h1 className={utilStyles.headingXl}>{title}</h1> */}
          {/* <div className={utilStyles.lightText}>
            <Date date={date} />
          </div> */}
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
