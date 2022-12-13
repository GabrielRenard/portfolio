import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper";

const Projects = () => {
  return (
    <section className="h-[500px] w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto mb-[20rem]">
      <h1 className="text-4xl text-center mt-[5rem]">Projects</h1>
      <h2 className="text-xl text-center mt-2 mb-[5rem]">
        Check out my latest projects
      </h2>
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
