import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import type { AppProps } from "next/app";
import { useState, useEffect, createContext } from "react";

if (typeof window !== "undefined") {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

export const WidthContext: any = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
      <Head>
        <title>Michael Davies</title>
        <meta name="mrgdavies website" content="Home of Michael Davies" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <WidthContext.Provider value={width}>
        <header>
          <Navbar />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </WidthContext.Provider>
    </>
  );
}

export default MyApp;
