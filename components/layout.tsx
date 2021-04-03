import React from 'react'
import { Container } from '@material-ui/core'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  maxWidth?: false | 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined
}
export const Layout = ({ children, maxWidth = 'lg' }: LayoutProps) => {
  return (
    <Container fixed maxWidth={maxWidth} style={{ paddingTop: '20px', paddingBottom: '80px' }}>
      {children}
    </Container>
  )
}
