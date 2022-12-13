import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  opacityVariant,
} from "../utils/motion";
import styles from "../styles/index";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="p-5 lg:p-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <div className="grid">
          <div className="grid mx-auto gap-5 md:gap-10 lg:gap-20 items-center smGrid md:grid-cols-[max-content,max-content,max-content]">
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className=""
            >
              <div className="space-y-10 grid">
                <FaLinkedin size="2rem" className="cursor-pointer" />
                <FaGithub size="2rem" className="cursor-pointer" />
              </div>
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=" md:order-1"
            >
              <div className="blob" />
            </motion.div>

            <div className="w-11/12 sm:w-[500px] md:w-[400px] col-start-1 col-end-3 md:col-start-[2] md:col-end-[3] space-y-2">
              <motion.h1
                variants={textVariant(1.1)}
                className={`${styles.HeroHeading} `}
              >
                Hi, I'm Gabriel
              </motion.h1>
              <motion.div variants={textVariant(1.2)}>
                <h2 className="text-4xl font-bold">Full-Stack Developer</h2>
              </motion.div>
              <motion.div variants={textVariant(1.3)}>
                <p className="text-3xl font-bold">
                  Young professional looking to start a career in web
                  development.
                </p>
              </motion.div>
              <motion.div variants={slideIn("down", "tween", 1.4, 1)}>
                <button className="bg-yellow-500 p-4 text-xl text-zinc-900 rounded-sm">
                  <a href="#contact" className="flex items-center gap-2">
                    Contact me <AiFillMessage size="2rem" />
                  </a>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          variants={opacityVariant(2.5, 2)}
          className="mt-[5rem] self-center cursor-pointer flex flex-col items-center"
        >
          <BsMouse size="2rem" />
          <FiChevronDown size="2rem" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
