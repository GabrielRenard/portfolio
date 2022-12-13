import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { ImSun } from "react-icons/im";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden md:flex relative py-8 w-11/12 md:w-9/12 lg:w-7/12 mx-auto justify-between"
    >
      <div className="absolute w-full inset-0 gradient-01" />
      <div className="absolute  inset-0 flex justify-between mx-auto items-center ">
        <div>
          <a href="#home" className="text-3xl">
            GR
          </a>
        </div>
        <ul className="flex sm:space-x-[3rem] md:space-x-[3rem] lg:space-x-[4rem] lg:text-xl">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
        <a href="#about">
          <ImSun size="1.5rem" className="cursor-pointer" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
