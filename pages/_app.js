import React from 'react';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { NFTProvider } from '../context/NFTContext';
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NFTProvider>
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <Script src="https://kit.fontawesome.com/4cb03d5bb2.js" crossOrigin="anonymous" />
      </ThemeProvider>
    </NFTProvider>
  )
};
export default MyApp;

