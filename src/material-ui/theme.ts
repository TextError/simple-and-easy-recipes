import { createMuiTheme } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";

export const theme = {
  primary: {
    light: '#F0F8FF',
    main: '#A9D7FF',
    dark: '#62B6FF'
  },
  secondary: {
    light: '#FFF8F2',
    main: '#fedbbf',
    dark: '#f0a68d'
  },
  white: {
    light: grey[100],
    main: grey[300],
    dark: grey[600],
  },
  error: {
    light: red[100],
    main: red[300],
    dark: red[600],
  }
}

export const MuiTheme = createMuiTheme({
  palette: {
    ...theme
  },
  typography: {
    allVariants: {
      color: '#373842'
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '3.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.75rem',
      }
    }
  }
});