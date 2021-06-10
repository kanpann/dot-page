import React from 'react'
import { Avatar, Grid, IconButton, withTheme } from '@material-ui/core'
import { SiteMeta } from '../../site.config'
import Categories from './Categories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { styled as muiStyled } from '@material-ui/core/styles'
import styled, { SideBarTheme } from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'
import Social from './Social'
import Logo from '../common/Logo'
import SearchForm from './SearchForm'
import CloseIcon from '@material-ui/icons/Close'

const MainFrame = styled.div`
  background-color: ${(props: SideBarTheme) => props.theme.app.box};
  ${(props: SideBarTheme) => (props.isBorder ? 'border: 1px solid gray' : '')};
`
const BackButton = muiStyled(withTheme(IconButton))({
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
  word-break: keep-all;
  color: ${(props: DefaultTheme) => props.theme.app.font};
`

type SideMenuProps = {
  isLogo?: boolean
  isBorder?: boolean
  handleClose?: () => void
}
const SideMenuBar = ({ isLogo, isBorder, handleClose }: SideMenuProps) => {
  const { github, email, author, descript, image } = SiteMeta.info
  return (
    <MainFrame isBorder={isBorder}>
      {handleClose && (
        <BackButton onClick={handleClose}>
          <CloseIcon fontSize="large" />
        </BackButton>
      )}
      <Grid
        style={{ padding: '10px' }}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid>
          <Categories />
        </Grid>
      </Grid>
    </MainFrame>
  )
}
export default SideMenuBar
