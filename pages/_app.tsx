import '../styles/globals.css'
import "@fontsource/jetbrains-mono"
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
