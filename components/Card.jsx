import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { GoDatabase } from "react-icons/go";
import { BsFillCaretDownFill } from "react-icons/bs";
import { opacityVariant } from "../utils/motion";

const Card = ({ title, id, index, active, handleHover, text }) => {
  return (
    <motion.div
      id={id}
      className={`glassmorphism relative rounded-md ${
        active === id
          ? " h-[15rem] md:h-[16rem] lg:h-[18rem] xl:h-[19rem]"
          : " h-[2.5rem]"
      } flex items-center justify-center min-w-[170px] sm:w-[250px] md:w-[300px] lg:w-[450px] xl:w-[500px] transition-[height] duration-[0.7s] ease-in-out cursor-pointer`}
      onHoverStart={() => handleHover(id)}
      onClick={() => handleHover(id)}
    >
      {active !== id && (
        <div className="absolute text-center top-0 flex items-center w-full justify-between px-2">
          <div className="flex gap-2 items-center">
            {id === "frontend" ? (
              <span>
                <HiCode size="2rem" />
              </span>
            ) : (
              <span>
                <GoDatabase size="2rem" />
              </span>
            )}
            <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          </div>
          <span>
            <BsFillCaretDownFill size="1.5rem" />
          </span>
        </div>
      )}

      {active === id && (
        <div className="absolute text-center top-0 w-full">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 ">
              <span>
                {id === "frontend" ? (
                  <HiCode size="2rem" />
                ) : (
                  <GoDatabase size="2rem" />
                )}
              </span>
              <h1 className="text-2xl lg:text-3xl font-bold justify-start">
                {title}
              </h1>
            </div>
            <span>
              <BsFillCaretDownFill size="1.5rem" className="rotate-180" />
            </span>
          </div>
          <div className="py-5 px-2">
            <ul>
              {text.map(item => (
                <motion.li
                  key={item}
                  variants={opacityVariant(0.5, 0.15)}
                  initial="hidden"
                  animate="show"
                  className="text-xl font-bold md:text-2xl mb-2"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
