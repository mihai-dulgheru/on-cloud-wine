import '../styles/globals.css';

import { Inria_Sans } from 'next/font/google'
 
const inriaSans = Inria_Sans({
  weight: '400',
  subsets: ['latin'],
})
 

export default function MyApp({ Component, pageProps }) {
  return (
  <main className={inriaSans.className}>
    <Component {...pageProps} />
  </main>
  )
}
