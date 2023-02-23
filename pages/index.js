import Head from "next/head";
import Script from "next/script";
import { Hero, About, Projects, Contact, Skills } from "../sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Renard Portfolio</title>
        <meta name="description" content="My personal portfolio" />
      </Head>
      <div className="overflow-hidden ">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 about-gradient" />
          <About />
        </div>
        <div className="relative">
          <div className="gradient-02 z-0" />
          <Skills />
        </div>
        <div className="relative">
          <div className="gradient-03 z-0" />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}
