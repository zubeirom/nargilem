/* eslint-disable */
import 'tailwindcss/tailwind.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import Layout from '../components/Layout'

const MyApp = function ({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
