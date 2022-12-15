import { HiCode } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  tech,
  id,
  index,
  liveLink,
  codeLink,
}) => {
  return (
    <div
      id={id}
      className="glassmorphism w-10/12 h-5/6 rounded-lg flex justify-center p-5"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1 md:text-3xl md:mb-2">
            {title}
          </h1>
          <p className="text-xl italic">{description}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl md:text-2xl">Built using:</h2>
          <ul>
            {tech.map((tech, index) => (
              <motion.li
                key={index}
                className="md:text-2xl"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <p>View Code</p>
            <a href={codeLink} target="_blank" rel="noreferrer">
              <HiCode size="2.5rem" className="" />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <p>View Live</p>
            <a href={liveLink} target="_blank" rel="noreferrer">
              <AiFillEye size="2.5rem" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
