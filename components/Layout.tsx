import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = '' }: Props) => {
  const [loaded, setLoad] = useState(false)
  useEffect(()=>{setLoad(true)},[])
  return(
    <div>
      <Head>
        <title>Hi! I'm Nicholas | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${loaded?"opacity-100":"opacity-0 invisible"} duration-500`}>
        {children}
      </div>
    </div>
  )
}

export default Layout
