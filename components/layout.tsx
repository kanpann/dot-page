import React from 'react'
import { Container } from '@material-ui/core'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container fixed maxWidth="lg" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
      {children}
    </Container>
  )
}
