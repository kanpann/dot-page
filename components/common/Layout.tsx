import React from 'react'
import { Container, Grid, Hidden } from '@material-ui/core'
import Logo from './Logo'
import Header from './Header'
import SideMenuBar from './SideMenuBar'
import styled from 'styled-components'

const Box = styled.div`
  background-color: ${(props) => props.theme.color.box};
  padding: 20px;
`

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined
}
const Layout = ({ children, maxWidth = 'lg' }: LayoutProps) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box>
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
      </Box>
    </Container>
  )
}
export default Layout
