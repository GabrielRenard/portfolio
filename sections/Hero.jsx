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
    <section
      id="home"
      className="px-5 lg:p-10 h-screen flex flex-col justify-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <div className="grid">
          <div className="grid mx-auto gap-5 md:gap-10 lg:gap-20 items-center smGrid md:grid-cols-[max-content,max-content,max-content]">
            <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
              <div className="space-y-10 grid">
                <motion.i whileHover={{ scale: 1.15 }}>
                  <FaLinkedin size="2rem" className="cursor-pointer" />
                </motion.i>
                <motion.i whileHover={{ scale: 1.15 }}>
                  <FaGithub size="2rem" className="cursor-pointer" />
                </motion.i>
              </div>
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=" md:order-1"
            >
              <div className="blob" />
            </motion.div>

            <div className="w-11/12 sm:w-[500px] md:w-[400px] col-start-1 col-end-3 md:col-start-[2] md:col-end-[3] space-y-2 md:space-y-4 lg:space-y-6">
              <motion.h1
                variants={textVariant(1.1)}
                className="text-6xl font-extrabold"
              >
                Hi, I'm Gabriel
              </motion.h1>
              <motion.div variants={textVariant(1.2)}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Full-Stack Developer
                </h2>
              </motion.div>
              <motion.div variants={textVariant(1.3)}>
                <p className="text-2xl md:text-3xl font-medium">
                  Young professional looking to start a career in web
                  development.
                </p>
              </motion.div>
              <motion.div variants={slideIn("down", "tween", 1.4, 1)}>
                <motion.button
                  className="bg-yellow-500 p-2 md:p-3 text-xl text-zinc-900 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Contact me <AiFillMessage size="2rem" />
                  </a>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.a
          variants={opacityVariant(2.5, 2)}
          whileHover={{ scale: 1.1 }}
          className="md:mt-[5rem] mt-0 self-center cursor-pointer flex flex-col items-center"
          href="#about"
        >
          <BsMouse size="2rem" />
          <FiChevronDown size="2rem" className="chevron" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
