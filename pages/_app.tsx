import '../theme/fonts.css'
import NextApp from 'next/app'
import React, { useState } from 'react'
import TopScrollBtn from '../components/common/TopScrollBtn'
import GlobalTheme from '../theme/Global'
import { LightTheme, DarkTheme } from '../theme/Theme'
import ThemeProvider from '../components/provider/ThemeProvider'
import styled from 'styled-components'
import Header from '../components/common/Header'
import { SiteMeta } from '../site.config'
import { ThemeCtxProvider } from '../components/provider/ThemeCtxProvider'

const Footer = styled.div`
  text-align: center;
  color: white;
  text-shadow: 0px 0px 10px black;
  padding-bottom: 20px;
  padding-top: 10px;
  color: white;
  a {
    color: #cacaca;
  }
`

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export default class App extends NextApp {
  state = {
    theme: 'light'
  }
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    const { theme } = this.state
    const { title } = pageProps.post != undefined ? pageProps.post : { title: SiteMeta.title }
    
    const handleTransTheme = () => {
      this.setState({theme: theme == 'light'? 'dark': 'light'})
    }

    const nowTheme = themes[theme]
    return (
      <ThemeProvider theme={nowTheme}>
        <ThemeCtxProvider theme={theme} fn={handleTransTheme}>
          <GlobalTheme />
          <Header title={title} />
          <Component {...pageProps} />
          <TopScrollBtn />
          <Footer>
            ©<a href="https://github.com/gunkims">gunkims</a>, Built with{' '}
            <a href="https://github.com/gunkims/gunlog">gunlog</a>
          </Footer>
        </ThemeCtxProvider>
      </ThemeProvider>
    )
  }
}
