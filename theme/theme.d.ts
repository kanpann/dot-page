import { DefaultTheme as Theme } from './Theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}