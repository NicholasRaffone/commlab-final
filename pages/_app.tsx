import React from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
    <Head>
    <link rel="shortcut icon" href='/nr.png'></link>
    <link rel="apple-touch-icon" sizes="180x180" href="/nr.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/nr.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/nr.png"/> 
    </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
