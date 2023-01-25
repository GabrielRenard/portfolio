import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textVariant,
  opacityVariant,
} from "../utils/motion";

const About = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center"
    >
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
              className="w-[40vw] h-[50vw] background-shadow-pink  md:w-[35vw] md:h-[40vw] lg:w-[25vw] lg:h-[30vw] rounded-xl object-cover bg-center max-w-[350px]"
            />
          </motion.div>

          <div className="grid md:grid-rows-2">
            <motion.p
              variants={textVariant(1.1)}
              className="text-center text-2xl self-center"
            >
              I am looking for an entry level position in marketing.
            </motion.p>
            <div className="flex flex-col my-[2rem] md:my-0 relative w-full">
              <div className="flex justify-around text-center">
                <div className="flex flex-col">
                  <motion.span
                    variants={textVariant(1.2)}
                    className="text-4xl font-extrabold"
                  >
                    1+
                  </motion.span>
                  <motion.span variants={textVariant(1.3)}>
                    Years
                    <br />
                    Experience
                    <br />
                    programming
                  </motion.span>
                </div>
                <div className="flex flex-col">
                  <motion.span
                    variants={textVariant(1.2)}
                    className="text-4xl font-extrabold"
                  >
                    10+
                  </motion.span>
                  <motion.span variants={textVariant(1.3)}>
                    Programming
                    <br />
                    Projects
                  </motion.span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                variants={textVariant(1.4)}
                className="btnGlassmorphism w-fit rounded-full self-center mt-[2rem] font-bold p-4 text-xl"
              >
                <a
                  href="/files/CV_Gabriel_Renard_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="leading-none uppercase font-extrabold tracking-wider"
                >
                  Download CV
                </a>
              </motion.button>
              <motion.img
                variants={opacityVariant(1.9, 1)}
                src="/Images/copy-dynamic-premium.png"
                alt=""
                className="absolute z-[-1] max-w-[25rem] top-[-7rem] left-[6rem] w-[50vw] md:w-full md:left-0 md:right-0 bottom-0"
                style={{ y }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
