import 'styled-components';

declare module 'styled-components' {
  export interface PostHeaderTheme {
    image: string;
  }
  export interface GlobalTheme {
    primary: string;
  }
}