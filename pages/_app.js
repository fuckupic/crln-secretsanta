import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'

import '@fontsource/figtree/300.css'
import '@fontsource/figtree/400.css'
import '@fontsource/figtree/500.css'
import '@fontsource/figtree/700.css'


const THEME = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffcc00',
    },
    secondary: {
      main: '#00cecb',
    },
    error: {
      main: '#f8333c',
    },
    success: {
      main: '#53ff45',
    },
    background: {
      default: '#000000',
      paper: '#484848',
    },
    text: {
      primary: 'rgba(220,220,220,1)',
    },
  },
  typography: {
    fontFamily: 'figtree',
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
})


function MyApp({ Component, pageProps }) {
  return (
<ThemeProvider theme={THEME}>

    <Component {...pageProps} />
</ThemeProvider>
  ) 
}

export default MyApp
