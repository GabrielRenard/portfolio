import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingAnimation = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-bold text-5xl ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="font-bold font-3xl"
  ></motion.h2>
);
