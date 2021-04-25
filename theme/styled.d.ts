import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface PostHeaderTheme {
    image: string;
  }
  export interface GlobalTheme {
    primary: string;
  }
  export interface DefaultTheme {
    color: {
      background: string;
      font: string;
      a: string;
      title: string;
      box: string;
    }
  }
}