import { AppProps } from 'next/app'
import AuthContextProvider from '../contexts/Auth'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider><Component {...pageProps} /></AuthContextProvider>
}
