import React from 'react'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeProvider = ({ theme, children }) => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  )
}
export default ThemeProvider
