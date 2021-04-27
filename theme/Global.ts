import { createGlobalStyle } from 'styled-components'

const lightTheme = createGlobalStyle`
  body {
    margin: 0px;
    font-family: 'nanumBarunGothic';
    background-color: ${props => props.theme.app.background};
    line-height: 30px;
  }
  img {
    max-width: 100%;
    display: block;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`
export default lightTheme
