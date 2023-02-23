import "../styles/globals.css";
import Layout from "../Layout/Layout";

import localFont from "@next/font/local";
const Jiro = localFont({ src: "./Jiro.ttf", variable: "--Jiro" });

function MyApp({ Component, pageProps }) {

  return (
    <>
      <main className={`${Jiro.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default MyApp;
