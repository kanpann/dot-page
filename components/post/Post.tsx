import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import DateView from './DateView'
import { Card, Chip, withTheme } from '@material-ui/core'
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'
import Link from 'next/link'

const TagFrame = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`
const MyCard = styled(withTheme(Card))((props: DefaultTheme) => ({
  backgroundColor: props.theme.app.card,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '1px 1px 5px 1px',
  },
}))
const MyTitle = styled(withTheme(Typography))((props: DefaultTheme) => ({
  color: props.theme.app.title,
  fontFamily: 'nanumSquare',
}))

type PostProps = {
  id: string
  title: string
  category: string
  date: string
  image: string
  tags: string[]
  excerpt: string
}
export const Post = ({ id, title, date, image, excerpt, tags, category }: PostProps) => {
  return (
    <Link href={id}>
      <MyCard>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <MyTitle gutterBottom variant="h4">
            {title}
          </MyTitle>
          <span>
            <DateView date={date} />
          </span>
          <TagFrame>
            <Chip
              key={category}
              style={{ marginRight: '5px' }}
              label={category}
              component="a"
              href="#chip"
              clickable
              color="primary"
            />
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
          <Typography variant="body2" color="textSecondary" component="p">
            {excerpt}
          </Typography>
        </CardContent>
      </MyCard>
    </Link>
  )
}
