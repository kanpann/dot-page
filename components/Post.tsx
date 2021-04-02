import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Date from './date'

type PostProps = {
  title: string
  date: string
  image: string
  content: string
}
export const Post = ({ title, date, image, content }: PostProps) => {
  return (
    <>
      <Grid xs={10} item>
        <Typography variant="h6">{title}</Typography>
        <p>{content}</p>
        <Date date={date} />
      </Grid>
      <Grid xs={2} item>
        <img style={{ width: '100%', height: '100%' }} src={image} />
      </Grid>
    </>
  )
}
