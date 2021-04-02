import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Date } from './Date'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px',
  },
  btn: {
    height: 410,
  },
})

type PostProps = {
  title: string
  date: string
  image: string
  content: string
}
export const Post = ({ title, date, image, content }: PostProps) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea className={classes.btn}>
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
            <Date date={date} />
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
