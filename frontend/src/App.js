import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Home from './views/home'

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#A8B7F3",
      contrastText: "#fff" //button text white instead of black
    },
    background: {
      default: "white"
    }
  }
});
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}