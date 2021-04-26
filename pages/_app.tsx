import '../theme/fonts.css'
import NextApp from 'next/app'
import React, { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import TopScrollBtn from '../components/common/TopScrollBtn'
import { darkTheme, defaultTheme, Theme } from '../theme/Theme'
import GlobalTheme from '../theme/Global'

const themes = {
  default: defaultTheme,
  dark: darkTheme,
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
      <ThemeProvider theme={themes['default']}>
        <GlobalTheme />
        <Component {...pageProps} />
        <TopScrollBtn />
      </ThemeProvider>
    )
  }
}
