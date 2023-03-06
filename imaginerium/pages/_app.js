import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "../styles/nprogress.css";

//Autentication session
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/*Component needed for authentication*/}
      <React.Fragment>
        <Head></Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    </SessionProvider>
  );
}
