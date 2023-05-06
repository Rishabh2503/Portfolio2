import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head'

const montserrat = Montserrat({
   subsets : ["latin"],
   variable : "--font-month"
})
export default function App({ Component, pageProps }) {
  return ( 
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
  <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
  <Component {...pageProps} />
  <Footer />
</main>
</>
)
}
