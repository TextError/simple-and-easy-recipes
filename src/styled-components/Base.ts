import { createGlobalStyle } from 'styled-components';
import { theme } from '../material-ui/theme';

const Base = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  :root{
    --lightPrimary: ${theme.primary.light};
    --primary: ${theme.primary.main};
    --darkPrimary: ${theme.primary.dark};
    --lightSecondary: ${theme.secondary.light};
    --secondary: ${theme.secondary.main};
    --darkSecondary: ${theme.secondary.dark};
    --lightWhite: ${theme.white.light};
    --white: ${theme.white.main};
    --darkWhite: ${theme.white.dark};
    --navbar: 64px;
    --footer: 188px;
    --transition: .3s;
    --transitionLinear: all .3s linear;
    --minHeight: calc(100vh - var(--navbar) - var(--footer));
    --padding: 24px;
  };
`

export default Base;