import '../theme/fonts.css'
import NextApp from 'next/app'
import React from 'react'
import TopScrollBtn from '../components/common/TopScrollBtn'
import GlobalTheme from '../theme/Global'
import { LightTheme, DarkTheme } from '../theme/Theme'
import ThemeProvider from '../components/style/ThemeProvider'
import styled from 'styled-components'
import Header from '../components/common/Header'
import { SiteMeta } from '../site.config'

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
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props

    const { title } = pageProps.post != undefined ? pageProps.post : { title: SiteMeta.title }
    const nowTheme = themes['light']
    return (
      <ThemeProvider theme={nowTheme}>
        <GlobalTheme />
        <Header title={title} />
        <Component {...pageProps} />
        <TopScrollBtn />
        <Footer>
          ©<a href="https://github.com/gunkims">gunkims</a>, Built with{' '}
          <a href="https://github.com/gunkims/gunlog">gunlog</a>
        </Footer>
      </ThemeProvider>
    )
  }
}
