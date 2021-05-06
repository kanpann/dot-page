import React from 'react'
import { Container, Grid, Hidden } from '@material-ui/core'
import Logo from './Logo'
import Head from './Head'
import SideMenuBar from './SideMenuBar'
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'

const Frame = styled.div`
  background-color: ${(props: DefaultTheme) => props.theme.app.box};
  padding: 10px 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
`

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined
}
const Layout = ({ children, maxWidth = 'lg' }: LayoutProps) => {
  return (
    <Container disableGutters={true} maxWidth={maxWidth}>
      <Logo />
      <Frame>
        <Head />
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
      </Frame>
    </Container>
  )
}
export default Layout
