import { createStyles, Grid, Link, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { Post as PostType } from '../lib/posts'
import { Post } from './Post'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      padding: '10px',
      color: 'black',
      '&:link': {
        textDecoration: 'none',
      },
      '&:visited': {
        textDecoration: 'none',
      },
      '&:hover': {
        textDecoration: 'none',
      },
    },
  }),
)

type PostListProps = {
  posts: PostType[]
}
export const PostList = ({ posts }: PostListProps) => {
  const classes = useStyles()
  return (
    <Grid container item direction="row" justify="center" alignItems="flex-start">
      {posts.map(({ id, date, title, image, content }) => (
        <Grid>
          <Link href={id} className={classes.link}>
            <Post key={id} title={title} date={date} image={image} content={content} />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
