import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { DateView } from './DateView'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '10px',
  },
  btn: {
    height: 410,
  },
})

type PostProps = {
  id: string
  title: string
  date: string
  image: string
  content: string
}
export const Post = ({ id, title, date, image, content }: PostProps) => {
  const classes = useStyles()
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
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <span>
          <DateView date={date} />
        </span>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </>
  )
}
