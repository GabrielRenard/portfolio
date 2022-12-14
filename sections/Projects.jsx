import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";
import { staggerContainer, fadeIn } from "../utils/motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper";

const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-screen w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
      id="projects"
    >
      <div className="h-[500px]">
        <TypingAnimation title="Projects" textStyles="text-center" />
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-xl text-center mt-2 mb-[2rem] lg:mb-[5rem]"
        >
          Check out my latest projects
        </motion.h2>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay, Mousewheel]}
          loop={true}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.technologies}
                index={index}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;
