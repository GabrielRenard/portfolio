import { useForm, ValidationError } from "@formspree/react";
import { AiFillPhone } from "react-icons/ai";

import {
  staggerContainer,
  fadeIn,
  textVariant,
  textVariant2,
} from "../utils/motion";
import { motion } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjbnnok");

  if (state.succeeded) {
    return <p>Thanks you for you email !</p>;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-screen max-w-[600px] mx-auto"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <TypingAnimation title="Contact me" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem] flex"
        >
          Get in touch
        </motion.p>
      </div>

      <div className="flex flex-col items-center text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem]">
        <motion.p
          variants={textVariant(1.1)}
          className="flex flex-col items-center"
        >
          <span>
            <AiFillPhone size={"2rem"} className="bg-inherit" />
          </span>
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
            type="submit"
            disabled={state.submitting}
            className="bg-yellow-500 rounded-md p-2 w-1/3 mx-auto text-zinc-900"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
