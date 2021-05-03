import React from 'react'
import { Avatar, Grid, IconButton, withTheme } from '@material-ui/core'
import { SiteMeta } from '../../site.config'
import Categories from './Categories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { styled as muiStyled } from '@material-ui/core/styles';
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'
import Social from './Social'

const BackButton = muiStyled(withTheme(IconButton))({
  position: 'fixed',
  bottom: '0',
  padding: '20px',
  width: '20px',
  height: '20px',
})
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
  word-break: keep-all;
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
            <Social github={github} email={email} />
          </InfoFrame>
        </Grid>
        <Grid style={{ width: '80%' }}>
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
