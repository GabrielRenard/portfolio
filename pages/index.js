import Head from "next/head";
import Image from "next/image";
import { Hero, About, Projects, Contact, Skills } from "../sections";
import styles from "../styles";

export default function Home() {
  return (
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
  );
}
