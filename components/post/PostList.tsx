import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { Post } from './Post'
import { Post as PostType } from '../../lib/types'
import Link from 'next/link'
import Pagination from '../common/Pagination'
import styled from 'styled-components'

const AddViewBtn = styled.a`
  border: 1px solid black;
  padding: 5px 50px;
  cursor: pointer;
`
type PostListProps = {
  posts: PostType[]
}
const PostList = ({ posts }: PostListProps) => {
  return (
    <Grid container item direction="row" justify="center" alignItems="flex-start">
      {posts.map(({ id, date, title, image, excerpt, tags, category }) => {
        return (
          <Grid xs={6} md={3} item key={id} style={{ padding: '10px' }}>
            <Link href={id}>
              <a>
                <Post
                  id={id}
                  title={title}
                  date={date}
                  image={image}
                  excerpt={excerpt!!}
                  tags={tags}
                  category={category}
                />
              </a>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default PostList
