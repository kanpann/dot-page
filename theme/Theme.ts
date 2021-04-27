import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles';
const muiTheme: MuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#222232',
    },
  },
});
export const theme = {
  ...muiTheme,
  app: {
    background: '#011931',
    font: '#ababab',
    a: '',
    title: 'white',
    box: '#0a0f1b'
  },
};
export type Theme = typeof theme;