import React, { memo } from 'react'
import { useRouter } from 'next/dist/client/router'
import styled, { PostHeaderTheme } from 'styled-components'
import { Post } from '../../lib/types'
import PagingUtil from '../../lib/paging-util'
import { findPostDataByCategory, getAllCategorys } from '../../lib/posts'
import PostList from '../../components/post/PostList'
import { MyHelmet, Layout, MyPagination } from '../../components/common'
import { CategoryInfo } from '../../site.config'

const PostHeader = styled.div`
  background-size: cover;
  background-position: center;
  height: 20rem;
  margin-bottom: 2rem;
  background-image: ${(props: PostHeaderTheme) => `url(${props.image})`};
  background-color: white;
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
  font-size: 4rem;
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
  category: string
}
const Category = ({ posts, category }: MenuProps) => {
  const router = useRouter()
  const page = Number(router.query.page as string) || 1

  const util = new PagingUtil(page, posts)
  const { result, totalPage } = util
  const categoryInfo = CategoryInfo[category]
  return (
    <Layout>
      <MyHelmet title={`'${category}' 메뉴`} content={`${category} 메뉴에 대한 글들입니다.`} />
      <PostHeader image={categoryInfo && categoryInfo.image}>
        <PostHeaderFrame>
          <PostTitle>{category}</PostTitle>
          <DateFrame>{categoryInfo && categoryInfo.descript}</DateFrame>
        </PostHeaderFrame>
      </PostHeader>
      <PostList posts={result} />
      <hr />
      <MyPagination target={`/categories/${category}`} page={page} totalPage={totalPage} />
    </Layout>
  )
}
export const getStaticPaths = async () => {
  const paths = await getAllCategorys()
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  const category = params.category
  const posts = await findPostDataByCategory(category)
  return {
    props: {
      posts,
      category,
    },
  }
}
export default memo(Category)
