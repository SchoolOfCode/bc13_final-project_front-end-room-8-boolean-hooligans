import '../styles/globals.css'
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react"
import '../styles/nprogress.css'
import { AppProps } from "next/app"
import { Session } from "next-auth"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import NProgress from 'nprogress';
// import Spinner from "../components/Spinner";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
})
{
  // const router = useRouter();
  // const [delay, setDelay] = useState(0)

  // useEffect(() => {
  //   router.events.on('routeChangeStart', () =>  NProgress.start());

  //   router.events.on('routeChangeComplete', () =>  NProgress.done());
  //   router.events.on('routeChangeError', () =>  NProgress.done());
  // }, []);

  

  // setTimeout(() => setDelay(1), 5000)
  
  return (
    <SessionProvider session={session}> 
    <React.Fragment> {/* This component is needed for the Moon/sun icons on the dark mode toggle */}
    <Head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </Head>
  <ThemeProvider>
  <Component {...pageProps} />
  {/* {delay === 0 ? <Spinner /> : null} */}
  
  </ThemeProvider>
  </React.Fragment>
  </SessionProvider>
  );
}
