import React from 'react'
import Link from 'next/link'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Post as PostType } from '../../lib/posts'
import { Post } from './Post'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      padding: '10px',
    },
  }),
)

type PostListProps = {
  posts: PostType[]
}
const PostList = ({ posts }: PostListProps) => {
  const classes = useStyles()
  return (
    <Grid container item direction="row" justify="center" alignItems="flex-start">
      {posts.map(({ id, date, title, image, excerpt, tags }) => (
        <Grid item key={id} className={classes.link}>
          <Link href={id}>
            <Post title={title} date={date} image={image} excerpt={excerpt} tags={tags} />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
export default PostList
