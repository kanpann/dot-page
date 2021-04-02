import { Grid } from '@material-ui/core'
import React from 'react'
import { Post as PostType } from '../lib/posts'
import { Post } from './Post'

type PostListProps = {
  posts: PostType[]
}
export const PostList = ({ posts }: PostListProps) => {
  return (
    <Grid container item direction="row" justify="center" alignItems="flex-start">
      {posts.map(({ id, date, title, image }) => (
        <Post key={id} title={title} date={date} image={image} />
      ))}
    </Grid>
  )
}
