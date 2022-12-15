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
      className="h-screen flex flex-col justify-center max-w-[600px] mx-auto relative"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center relative">
        <TypingAnimation title="Contact me" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-xl text-center flex"
        >
          Get in touch
        </motion.p>
        <motion.img
          variants={opacityVariant(2, 1)}
          src="/Images/chat-text-dynamic-premium.png"
          alt=""
          className="absolute z-[-100] w-[15rem] top-[-15rem] right-[-8rem]"
          style={{ y }}
        />
      </div>

      <div className="flex flex-col items-center text-xl text-center mt-2">
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
          className="w-11/12 mx-auto flex flex-col gap-5 mt-[2rem]"
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
              className="p-2 rounded-sm glassmorphism placeholder-zinc-300 font-bold"
            />
          </motion.div>
          <motion.div variants={textVariant(1.4)} className="flex flex-col ">
            <label htmlFor="email" className="hidden">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="p-2 rounded-sm glassmorphism placeholder-zinc-300 font-bold"
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
              className="rounded-md p-2 glassmorphism placeholder-zinc-300 font-bold"
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
            className="btnGlassmorphism rounded-full p-3 w-1/2 md:w-fit mx-auto uppercase font-bold"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
