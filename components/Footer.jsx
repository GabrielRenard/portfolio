import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="px-10 py-5 relative footerGlassmorphism"
    >
      <div className="footer-gradient" />
      <div className="flex items-center justify-between flex-wrap gap-4">
        <a
          href="#home"
          className="font-sans text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          GR
        </a>
        <p className="font-normal text-sm opacity-50">
          Copyright &#169; 2022 - 2023 Gabriel. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/gabriel-renard/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin
              size="1.5rem"
              className="cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out"
            />
          </a>

          <a
            href="https://github.com/GabrielRenard"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub
              size="1.5rem"
              className="cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out"
            />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
