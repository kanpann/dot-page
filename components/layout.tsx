import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Logo } from './Logo'
import { Header } from '.'

const useStyles = makeStyles((theme: Theme) =>
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
export const Layout = ({ children, maxWidth = 'lg' }: LayoutProps) => {
  const classes = useStyles()
  return (
    <Container
      className={classes.root}
      fixed
      maxWidth={maxWidth}
      style={{ paddingTop: '20px', paddingBottom: '80px' }}
    >
      <Header />
      <Logo />
      {children}
    </Container>
  )
}
