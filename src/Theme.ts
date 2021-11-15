import { createTheme } from "@mui/material/styles";


export const theme = createTheme  ({
  palette: {
    primary: {
      main: '#011936',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#84DCC6',
    },
    error: {
      main: '#FF6B6B',
    },
    background: {
      default: '#007EA7',
    },
    warning: {
      main: '#F5E960',
    },
    success: {
      main: '#64B96A',
    },
  },
  spacing: 8,
});