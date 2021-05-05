import { DefaultTheme as Theme } from '../theme/Theme'
import 'styled-components';

declare module 'styled-components' {
  export interface PostHeaderTheme {
    image: string;
  }
  export interface GlobalTheme {
    primary: string;
  }
  export interface DefaultTheme extends Theme {
  }
  export interface CategoryTheme extends Theme {
    color?: string;
  } 
  export interface SideBarTheme extends Theme {
    isBorder?: boolean;
  } 
}