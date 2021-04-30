import React from 'react'
import { Container, Grid, Hidden } from '@material-ui/core'
import Logo from './Logo'
import Header from './Header'
import SideMenuBar from './SideMenuBar'
import { withTheme } from '@material-ui/core'
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'

const MyContainer = styled(withTheme(Container))((props: DefaultTheme) => ({
  backgroundColor: props.theme.app.box,
}))

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined
}
const Layout = ({ children, maxWidth = 'lg' }: LayoutProps) => {
  return (
    <MyContainer maxWidth={maxWidth}>
      <Header />
      <Logo />
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Hidden smDown>
          <Grid item sm={3}>
            <SideMenuBar />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9}>
          {children}
        </Grid>
      </Grid>
    </MyContainer>
  )
}
export default Layout
