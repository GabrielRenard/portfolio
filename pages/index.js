import Head from "next/head";
import Image from "next/image";
import { Hero, About, Projects, Contact, Skills } from "../sections";
import styles from "../styles";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
