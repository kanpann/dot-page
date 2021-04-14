import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import DateView from './DateView'

type PostProps = {
  title: string
  date: string
  image: string
  excerpt: string
}
export const Post = ({ title, date, image, excerpt }: PostProps) => {
  return (
    <>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'nanumSquare' }}>
          {title}
        </Typography>
        <span>
          <DateView date={date} />
        </span>
        <Typography variant="body2" color="textSecondary" component="p">
          {excerpt}
        </Typography>
      </CardContent>
    </>
  )
}
