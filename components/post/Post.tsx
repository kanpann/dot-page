import React from 'react'
import Link from 'next/link'
import { Typography, CardContent, Card, withTheme, CardMedia } from '@material-ui/core'
import styled from 'styled-components'
import { styled as muiStyled } from '@material-ui/core/styles'
import { DefaultTheme } from '../../theme/Theme'
import DateView from './DateView'
import Chips from './Chips'

const NoImage = styled.div`
  height: 130px;
  width: 100%;
  background-color: #e2e2e2;
  color: black;
  font-size: 3rem;
  text-align: center;
  justify-content: center;
  font-family: 'sunspots';

  div {
    position: relative;
    top: 30px;
  }
`
const MyTitle = muiStyled(withTheme(Typography))((props: DefaultTheme) => ({
  color: props.theme.app.title,
  fontSize: '2.5vh',
  fontFamily: 'nanumSquare',
  wordBreak: 'keep-all',
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
    <>
      {image && (
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="130"
          image={image}
          style={{ backgroundColor: 'white' }}
          title="Contemplative Reptile"
        />
      )}
      {!image && (
        <NoImage>
          <div>No Image</div>
        </NoImage>
      )}

      <CardContent>
        <MyTitle gutterBottom variant="h4">
          {title}
        </MyTitle>
      </CardContent>
    </>
  )
}
