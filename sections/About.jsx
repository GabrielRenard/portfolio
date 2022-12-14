import Image from "next/image";
import { motion } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textVariant,
  opacityVariant,
} from "../utils/motion";

const About = () => {
  return (
    <section id="about" className="h-screen flex flex-col">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingAnimation title="About Me" textStyles="text-center" />
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem]"
        >
          My Introduction
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:max-w-[1000px] mx-auto items-center place-items-center gap-[2rem] md:gap-[3rem]">
          <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <img
              src={"/Images/profile2.jpg"}
              alt="profile image"
              className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] rounded-xl object-cover"
            />
          </motion.div>

          <div className="grid md:grid-rows-2 px-[4rem]">
            <motion.p
              variants={textVariant(1.1)}
              className="text-center text-2xl self-center"
            >
              I am looking for an entry level position in full-stack web
              development.
            </motion.p>
            <div className="flex flex-col my-[2rem] md:my-0">
              <div className="flex justify-around text-center">
                <div className="flex flex-col">
                  <motion.span
                    variants={textVariant(1.2)}
                    className="text-4xl font-extrabold"
                  >
                    1+
                  </motion.span>
                  <motion.span variants={opacityVariant(1.5, 2)}>
                    Years
                    <br />
                    Experience
                  </motion.span>
                </div>
                <div className="flex flex-col">
                  <motion.span
                    variants={textVariant(1.2)}
                    className="text-4xl font-extrabold"
                  >
                    10+
                  </motion.span>
                  <motion.span variants={opacityVariant(1.5, 2)}>
                    Completed
                    <br />
                    Projects
                  </motion.span>
                </div>
              </div>
              <motion.button
                variants={textVariant(1.3)}
                className="bg-yellow-500 text-zinc-900 w-1/2 rounded-full sm:w-1/3 md:w-8/12 self-center p-4 mt-[2rem] md:mt-[4rem] font-bold"
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
