import React, { useState } from 'react'
import { SiteMeta } from '../../site.config'
import { Container, Drawer, Grid, Hidden, IconButton, withTheme } from '@material-ui/core'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../common/Logo'
import SideMenuBar from '../sidebar/SideMenuBar'
import { DefaultTheme } from '../../theme/Theme'
import Footer from './Footer'
import ThemeSwitch from '../header/ThemeSwitch'
import { styled as muiStyled } from '@material-ui/core/styles'
import Header from '../header/Header'
import TopScrollBtn from './TopScrollBtn'

const MyMenuIcon = muiStyled(withTheme(MenuIcon))((props: DefaultTheme) => ({
  color: props.theme.app.title,
}))

const Frame = styled.div`
  background-color: ${(props: DefaultTheme) => props.theme.app.box};
  padding: 10px 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
`
type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
const Layout = ({ children, maxWidth = 'md' }: LayoutProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMenuPoper = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <>
      <Header />
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <IconButton
          onClick={handleMenuPoper}
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MyMenuIcon fontSize="large" />
        </IconButton>
      </div>
      <Container fixed disableGutters={true} maxWidth={maxWidth}>
        <Logo />
        <Frame>
          <Drawer open={isOpenMenu} anchor="left" onClose={handleMenuPoper}>
            <SideMenuBar isLogo={true} isBorder={true} handleClose={handleMenuPoper} />
          </Drawer>
          {children}
        </Frame>
        <TopScrollBtn />
        <Footer github={SiteMeta.info.github} author={SiteMeta.info.author} />
      </Container>
    </>
  )
}
export default Layout
