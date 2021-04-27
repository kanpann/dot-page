import '../theme/fonts.css'
import NextApp from 'next/app'
import React from 'react'
import TopScrollBtn from '../components/common/TopScrollBtn'
import GlobalTheme from '../theme/Global'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from '../theme/theme'

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

    const nowTheme = themes['light']
    return (
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={nowTheme}>
          <MuiThemeProvider theme={nowTheme}>
            <GlobalTheme />
            <Component {...pageProps} />
            <TopScrollBtn />
          </MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    )
  }
}
