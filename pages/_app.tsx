import '../theme/fonts.css'
import NextApp from 'next/app'
import React from 'react'
import TopScrollBtn from '../components/common/TopScrollBtn'
import GlobalTheme from '../theme/Global'
import { LightTheme, DarkTheme } from '../theme/Theme'
import ThemeProvider from '../components/style/ThemeProvider'

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props

    const nowTheme = themes['dark']
    return (
      <ThemeProvider theme={nowTheme}>
        <GlobalTheme />
        <Component {...pageProps} />
        <TopScrollBtn />
      </ThemeProvider>
    )
  }
}
