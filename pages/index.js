import Head from "next/head";
import Image from "next/image";
import { Hero, About, Projects, Contact, Skills } from "../sections";
import styles from "../styles";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <div className="gradient-02 z-0" />
      </div>
      <div className="relative">
        <div className="gradient-03 z-0" />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
