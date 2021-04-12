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
      {posts.map(({ id, date, title, image, content }) => (
        <Grid xs={12}>
          <Post key={id} id={id} title={title} date={date} image={image} content={content} />
        </Grid>
      ))}
    </Grid>
  )
}
