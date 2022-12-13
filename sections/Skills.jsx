import { skills } from "../constants/index";
import Card from "../components/Card";
import { useState } from "react";
import { HiCode } from "react-icons/hi";

const Skills = () => {
  const [active, setActive] = useState("frontend");

  return (
    <section id="skills" className="mb-[5rem]">
      <h1 className="text-4xl text-center mt-[5rem]">Skills</h1>
      <p className="text-xl text-center mt-2 mb-[5rem]">My technical level</p>
      <div className="block">
        <div className="flex justify-center gap-[25px] sm:gap-[50px] md:gap-[75px] lg:gap-[100px] h-[30rem]">
          {skills.map((skill, index) => (
            <Card
              title={skill.title}
              id={skill.id}
              index={index}
              text={skill.skills}
              active={active}
              handleHover={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
