import { HiCode } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";

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
              <li key={index} className="md:text-2xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <p>View Code</p>
            <a href={codeLink} target="_blank">
              <HiCode size="2rem" className="" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p>View Live</p>
            <a href={liveLink} target="_blank">
              <AiFillEye size="2rem" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
