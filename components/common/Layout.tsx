import React, { useState } from 'react'
import { Container, Drawer, Grid, Hidden, IconButton, withTheme } from '@material-ui/core'
import Logo from './Logo'
import SideMenuBar from './SideMenuBar'
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'
import { Helmet } from 'react-helmet'
import { SiteMeta } from '../../site.config'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { styled as muiStyled } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

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
type HelmetInfoType = {
  title: string
  content?: string
  image?: string
}
type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  helmetInfo?: HelmetInfoType
}
const Layout = ({ children, maxWidth = 'lg', helmetInfo }: LayoutProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMenuPoper = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <Container fixed disableGutters={true} maxWidth={maxWidth}>
      {helmetInfo && (
        <Helmet
          meta={[
            { name: 'description', content: helmetInfo.content },
            { property: 'og:title', content: helmetInfo.title },
            { property: 'og:description', content: helmetInfo.content },
            { property: 'og:image', content: helmetInfo.image },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:creator', content: SiteMeta.info.author },
            { name: 'twitter:title', content: helmetInfo.title },
            { name: 'twitter:description', content: helmetInfo.content },
          ]}
        >
          <meta charSet="utf-8" />
          <title>{helmetInfo.title}</title>
        </Helmet>
      )}
      <Logo />
      <Frame>
        <Hidden mdUp>
          <IconButton
            onClick={handleMenuPoper}
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MyMenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
        <ThemeSwitch />
        <Drawer open={isOpenMenu} anchor="left" onClose={handleMenuPoper}>
          <SideMenuBar isLogo={true} isBorder={true} handleClose={handleMenuPoper} />
        </Drawer>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Hidden smDown>
            <Grid item md={3}>
              <SideMenuBar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={9}>
            {children}
          </Grid>
        </Grid>
      </Frame>
      <Footer github={SiteMeta.info.github} author={SiteMeta.info.author} />
    </Container>
  )
}
export default Layout
