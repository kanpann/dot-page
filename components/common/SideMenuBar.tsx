import React from 'react'
import { Avatar, Grid, IconButton, Typography, withTheme } from '@material-ui/core'
import { SiteMeta } from '../../site.config'
import Categories from './Categories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import Link from 'next/link'
import { styled as muiStyled } from '@material-ui/core/styles';
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'

const BackButton = muiStyled(withTheme(IconButton))({
  position: 'fixed',
  bottom: '0',
  padding: '20px',
  width: '20px',
  height: '20px',
})
const CategoryName = muiStyled(withTheme(Typography))((props: DefaultTheme) => ({
  marginTop: '30px',
  textAlign: 'center',
  fontWeight: 300,
  paddingBottom: '10px',
  borderBottom: '1px solid ' + props.theme.app.title,
  color: '1px solid ' + props.theme.app.title,
}))
const MyAvatar = muiStyled(withTheme(Avatar))({
  width: '150px',
  height: '150px',
  margin: '0 auto',
})
const Name = styled.div`
  font-size: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${(props: DefaultTheme) => props.theme.app.title};
`
const InfoFrame = styled.div`
  text-align: center;
  color: ${(props: DefaultTheme) => props.theme.app.font};
`
const Contents = styled.p`
  width: 80%;
  margin: 0 auto;
  text-shadow: 5px 5px 10px #656565;
`
const Social = styled.div`
  cursor: pointer;
  margin-top: 20px;
  color: ${(props: DefaultTheme) => props.theme.app.title};
  span {
    margin: 10px;
  }
`

type SideMenuProps = {
  handleClose?: () => void
}
const SideMenuBar = ({ handleClose }: SideMenuProps) => {
  const { profileImage, info } = SiteMeta
  const { github, email, author, descript } = info
  return (
    <>
      <Grid
        style={{ padding: '10px' }}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid>
          <InfoFrame>
            <MyAvatar src={profileImage} />
            <Name>{author}</Name>
            <Contents>{descript}</Contents>
            <Social>
              {github && (
                <Link href={github}>
                  <span>
                    <GitHubIcon />
                  </span>
                </Link>
              )}
              {email && (
                <Link href={`mailto:${email}`}>
                  <span>
                    <EmailIcon />
                  </span>
                </Link>
              )}
              <Link href="/feed.xml">
                <span>
                  <RssFeedIcon />
                </span>
              </Link>
            </Social>
          </InfoFrame>
        </Grid>
        <Grid style={{ width: '80%' }}>
          <CategoryName variant="h5">Categories</CategoryName>
          <Categories />
        </Grid>
      </Grid>
      {handleClose && (
        <BackButton onClick={handleClose}>
          <ArrowBackIcon />
        </BackButton>
      )}
    </>
  )
}
export default SideMenuBar
