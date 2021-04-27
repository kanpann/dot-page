import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles'

const lightTheme: MuiTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6666ff',
    },
  },
})
const darkTheme: MuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#222232',
    },
  },
})

export const LightTheme = {
  ...lightTheme,
  app: {
    background: '#8ed4c7',
    font: 'black',
    a: 'black',
    title: 'black',
    box: 'white'
  },
}
export const DarkTheme = {
  ...darkTheme,
  app: {
    background: '#011931',
    font: '#ababab',
    a: '',
    title: 'white',
    box: '#0a0f1b'
  },
}

export type Theme = typeof DarkTheme