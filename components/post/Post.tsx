import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import DateView from './DateView'
import { Card, Chip, withTheme } from '@material-ui/core'
import styled from 'styled-components'

const TagFrame = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`
const MyCard = styled(withTheme(Card))((props) => ({
  backgroundColor: props.theme.app.background,
}))
const MyTitle = styled(withTheme(Typography))((props) => ({
  color: props.theme.app.title,
  fontFamily: 'nanumSquare',
}))

type PostProps = {
  title: string
  date: string
  image: string
  tags: string[]
  excerpt: string
}
export const Post = ({ title, date, image, excerpt, tags }: PostProps) => {
  return (
    <MyCard>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <MyTitle gutterBottom variant="h5" component="h2">
          {title}
        </MyTitle>
        <TagFrame>
          {tags.map((tag) => (
            <Chip
              key={tag}
              style={{ marginRight: '5px' }}
              label={tag}
              component="a"
              href="#chip"
              clickable
              color="primary"
            />
          ))}
        </TagFrame>
        <span>
          <DateView date={date} />
        </span>
        <Typography variant="body2" color="textSecondary" component="p">
          {excerpt}
        </Typography>
      </CardContent>
    </MyCard>
  )
}
