import '../styles/global.css'
import NextApp from 'next/app'
import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import TopScrollBtn from '../components/common/TopScrollBtn'

const theme: DefaultTheme = {
  primary: 'green',
}
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <TopScrollBtn />
      </ThemeProvider>
    )
  }
}
