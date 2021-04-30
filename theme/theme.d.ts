import { Theme } from './theme';
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
  export interface PostHeaderTheme {
    image: string;
  }
  export interface GlobalTheme {
    primary: string;
  }
}