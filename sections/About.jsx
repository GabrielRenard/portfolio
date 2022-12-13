import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mb-[10rem]">
      <h1 className="text-4xl text-center mt-[5rem]">About Me</h1>
      <h2 className="text-xl text-center mt-2 mb-[5rem]">My Introduction</h2>
      <div className="grid md:grid-cols-2 lg:max-w-[1000px] mx-auto items-center place-items-center gap-[3rem]">
        <Image
          src={"/Images/profile2.jpg"}
          width={400}
          height={400}
          alt="profile image"
          className="rounded-xl"
        />

        <div className="grid md:grid-rows-2 px-[4rem]">
          <p className="text-center text-2xl self-center">
            I am looking for an entry level position in full-stack web
            development.
          </p>
          <div className="flex flex-col my-[4rem] md:my-0">
            <div className="flex justify-around text-center">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold">1+</span>
                <span>
                  Years
                  <br />
                  Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold">10+</span>
                <span>
                  Completed
                  <br />
                  Projects
                </span>
              </div>
            </div>
            <button className="bg-yellow-500 text-zinc-900 w-full sm:w-1/3 md:w-8/12 self-center p-4 rounded-full mt-[4rem] font-bold">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
