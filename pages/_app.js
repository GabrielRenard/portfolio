import "../styles/globals.css";
import Layout from "../Layout/Layout";
import Script from "next/script";

import localFont from "@next/font/local";
const Jiro = localFont({ src: "./Jiro.ttf", variable: "--Jiro" });

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Script 
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    id="google-analytics"
    />

    <Script strategy="lazyOnload"
    id="google-analytics"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
      `}
    </Script>

      <main className={`${Jiro.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default MyApp;
