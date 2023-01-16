import '../styles/globals.css'
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return ( 
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
  </ThemeProvider>
  </React.Fragment>
  );
}
