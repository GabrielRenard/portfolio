import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { ImSun } from "react-icons/im";

const Navbar = () => {
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="md:flex relative py-8 w-11/12 md:w-9/12 lg:w-7/12 mx-auto justify-between"
      >
        <div className="absolute w-full inset-0 gradient-01" />
        <div className="absolute inset-0 flex justify-between mx-auto items-center">
          <div>
            <a href="#home" className="text-2xl md:text-3xl lg:text-4xl">
              <span className="font-sans text-zinc-300 hover:text-zinc-50 transition-colors duration-200 ease-in-out">
                GR
              </span>
            </a>
          </div>
          <ul className="flex text-lg font-bold space-x-4 sm:space-x-[3rem] md:space-x-[3rem] lg:space-x-[4rem] lg:text-xl">
            <motion.a whileHover={{ scale: 1.1 }} href="#about">
              About
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#skills">
              Skills
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#projects">
              Projects
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#contact">
              Contact
            </motion.a>
          </ul>
          <a href="#about">
            <ImSun size="1.5rem" className="invisible cursor-pointer" />
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
