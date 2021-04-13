import React from 'react'
import { Container, Grid, Hidden } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Logo } from './Logo'
import { Header } from '.'
import { SideMenuBar } from './SideMenuBar'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'white',
    },
  }),
)

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined
}
export const Layout = ({ children, maxWidth = 'md' }: LayoutProps) => {
  const classes = useStyles()
  return (
    <Container
      className={classes.root}
      maxWidth={maxWidth}
      style={{ paddingTop: '20px', paddingBottom: '80px' }}
    >
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
    </Container>
  )
}
