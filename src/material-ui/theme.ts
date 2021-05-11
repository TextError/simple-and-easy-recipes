import { createMuiTheme } from "@material-ui/core";
import { lightBlue, grey } from "@material-ui/core/colors";

export const theme = {
  primary: {
    light: lightBlue[100],
    main: lightBlue[300],
    dark: lightBlue[600],
  },
  secondary: {
    light: '#C6693F',
    main: '#F7834F',
    dark: 'F99C72'
  },
  white: {
    light: grey[100],
    main: grey[300],
    dark: grey[600],
  }
}

export const MuiTheme = createMuiTheme({
  palette: {
    ...theme
  },
  overrides: {}
});