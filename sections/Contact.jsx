import { useForm, ValidationError } from "@formspree/react";

import {
  staggerContainer,
  fadeIn,
  textVariant,
  opacityVariant,
} from "../utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjbnnok");
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  if (state.succeeded) {
    return <p>Thanks you for you email !</p>;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-screen max-w-[600px] mx-auto relative"
      id="contact"
    >
      <div className="flex flex-col items-center relative">
        <TypingAnimation title="Contact me" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem] flex"
        >
          Get in touch
        </motion.p>
        <motion.img
          variants={opacityVariant(1.25, 1)}
          src="/Images/chat-text-dynamic-premium.png"
          alt=""
          className="absolute z-[-100] w-[15rem] top-[-12rem] right-0"
          style={{ y }}
        />
      </div>

      <div className="flex flex-col items-center text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem]">
        <motion.p
          variants={textVariant(1.1)}
          className="flex flex-col items-center"
        >
          Call me
        </motion.p>
        <motion.p variants={textVariant(1.2)}>+33 695 474 166</motion.p>
      </div>

      <div>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mbjbnnok"
          method="POST"
          className="w-11/12 mx-auto flex flex-col gap-5"
        >
          <motion.div variants={textVariant(1.3)} className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="p-2 rounded-sm glassmorphism"
            />
          </motion.div>
          <motion.div variants={textVariant(1.4)} className="flex flex-col">
            <label htmlFor="email" className="hidden">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="p-2 rounded-sm glassmorphism"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </motion.div>
          <motion.div variants={textVariant(1.5)} className="flex flex-col">
            <textarea
              type="textarea"
              id="message"
              name="message"
              rows="8"
              cols="8"
              placeholder="Message"
              className="rounded-md p-2 glassmorphism"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </motion.div>
          <motion.button
            variants={textVariant(1.6)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            type="submit"
            disabled={state.submitting}
            className="glassmorphism rounded-full p-2 w-1/3 mx-auto uppercase font-bold"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
