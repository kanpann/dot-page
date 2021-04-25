import { createGlobalStyle } from 'styled-components'

const lightTheme = createGlobalStyle`
  body {
    margin: 0px;
    background-color: ${props => props.theme.color.background};
    font-family: 'nanumBarunGothic';
    line-height: 30px;
  }
  img {
    max-width: 100%;
    display: block;
  }
  a {
    color: ${props => props.theme.color.a};
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
