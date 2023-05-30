import theme from '@/Theme/muiTheme'
import { ThemeProvider } from '@mui/material'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '@/styles/globals.css'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>

      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>)
}
