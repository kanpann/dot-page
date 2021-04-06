import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface PostHeaderTheme {
    image: string;
  }
  export interface GlobalTheme {
    primary: string;
  }
}