import { Theme } from './theme';
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    color: {
      background: string;
      font: string;
      a: string;
      title: string;
      box: string;
    }
  }
}