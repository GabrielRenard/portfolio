import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingAnimation } from "../components/TextAnimation";
import { staggerContainer, fadeIn, opacityVariant } from "../utils/motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper";

const Projects = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-screen flex flex-col justify-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
      id="projects"
    >
      <div className="relative">
        <TypingAnimation title="Projects" textStyles="text-center" />
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-xl text-center "
        >
          Swipe to check out my latest projects
        </motion.h2>
        <motion.img
          variants={opacityVariant(0.1, 1)}
          src="/Images/computer-dynamic-premium.png"
          alt=""
          className="absolute z-[-100] w-[25rem] top-[-300px] md:left-[-200px] left-[-50px] "
          style={{ y }}
        />
        <Swiper
          navigation={true}
          speed={1000}
          autoplay={{
            delay: 2000,
            pauseOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay, Mousewheel]}
          loop={true}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide
            key={project.id}
            >
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
