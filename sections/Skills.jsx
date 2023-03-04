import { skills } from "../constants/index";
import Card from "../components/Card";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";
import {
  staggerContainer,
  fadeIn,
  opacityVariant,
} from "../utils/motion";

const Skills = () => {
  const [active, setActive] = useState("frontend");
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  return (
    <>
      <motion.div
        className="h-screen"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <section
          id="skills"
          className="relative flex flex-col justify-center mt-[5rem]"
        >
          <TypingAnimation title="Skills" textStyles="text-center" />
          <motion.p
            variants={fadeIn("up", "tween", 0.25, 1)}
            className="text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem]"
          >
            My technical level
          </motion.p>
          <div className="mt-[5rem] flex justify-center">
            <motion.img
              variants={opacityVariant(1.5, 1)}
              src="/Images/tool-dynamic-premium.png"
              alt=""
              className="absolute top-[-50px] z-[-1] w-[20rem]"
              style={{ y }}
            />
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="flex justify-center gap-[1rem] sm:gap-[50px] md:gap-[75px] lg:gap-[100px]"
            >
              {skills.map((skill, index) => (
                
                  <Card
                    key={skill.id}
                    title={skill.title}
                    id={skill.id}
                    index={index}
                    text={skill.skills}
                    active={active}
                    handleHover={setActive}
                  />
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Skills;
