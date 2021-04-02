import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'
import { Container } from '@material-ui/core'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}
export default function Layout({ children }: LayoutProps) {
  return (
    <Container fixed maxWidth="md" style={{ paddingTop: '20px' }}>
      {children}
    </Container>
  )
}
