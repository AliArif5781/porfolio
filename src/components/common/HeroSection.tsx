import { motion, MotionConfig } from "motion/react";
import Github from "./Button/Github";
import Website from "./Button/Website";
import LanguageUse from "./LanguageUse";
import college from "/college.jpeg";
import ecommerence from "/E-com.mp4";
// import logo from "/img.jpeg";
import pbm from "/pbm1.mp4";
import school from "/school2.jpeg";
import spotiy from "/spt.mp4";
import university from "/university.jpeg";
import ContactUs from "./ContactUs";
import { useRef } from "react";
import { CodeXml, Linkedin, ScrollText } from "lucide-react";

const HeroSection = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const handleSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectSkill = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="h-[100%]  w-[42rem] px-[1.5rem]">
          <div className="grid sm:grid-cols-12 py-[5rem] ">
            {/*  */}
            <div className="sm:col-span-10">
              {" "}
              <h1 className="text-6xl font-bold text-black-350 ">
                Hi, I'm Ali 👋
              </h1>
              <h1 className="text-3xl font-semibold pt-[.5rem] text-black-350 ">
                Frontend Web Developer
              </h1>
              <p className="text-[1.2rem] text-black-350 w-[90%] pt-4">
                Software Engineer turned ideas into reality. I love building
                things and helping people.
              </p>
            </div>
            {/*  */}
            {/* <div className="sm:col-span-2 hidden lg:block">
              <img src={logo} alt="profile-logo" />
            </div> */}
          </div>
          {/*  */}
          <div>
            <h2 className="text-xl font-bold text-black-350">About</h2>
          </div>
          <p className="text-white-250 pt-2">
            In 2023, I embarked on my journey as a web developer, driven by a
            passion for technology and a desire to create impactful digital
            experiences. With a degree in Computer Science, I possess a solid
            foundation in programming principles and problem-solving techniques,
            which I apply to my work in frontend development, enabling me to
            write efficient and maintainable code.
          </p>
          {/*  */}
          <div>
            <h2 className="text-xl font-bold text-black-350 pt-5">
              Work Experience
            </h2>
            {/*  */}
            <div className="grid sm:grid-cols-12 place-content-center">
              <h4 className="sm:col-span-6 text-md font-bold text-black-200 pt-5">
                Internship
              </h4>
              <h4 className="sm:col-span-6 text-md font-bold text-black-200 pt-5 text-right">
                6 months
              </h4>
            </div>
            {/*  */}
            <p className="sm:col-span-12 font-bold text-black-200">
              TechXore, [Lahore, Pakistan]
            </p>
            {/*  */}

            <div className="grid sm:grid-cols-12 pt-[10px]">
              <span className="col-span-1 font-semibold">1-</span>
              <p className="col-span-11 text-white-250">
                During this journey i collaborated with the development team to
                design and implement web applications, improving user experience
                and functionality.
              </p>
              <span className="col-span-1 pt-2 font-semibold">2-</span>
              <p className="col-span-11 text-white-250 pt-2">
                Assisted in debugging and troubleshooting issues in existing
                applications, enhancing overall performance.
              </p>
            </div>
            {/* Self-thought */}
            <div className="grid sm:grid-cols-12 place-content-center">
              <h4 className="sm:col-span-8 text-md font-bold text-black-200 pt-5">
                Self-Directed Learning and Project Development
              </h4>
              <h4 className="sm:col-span-4 text-md font-bold text-black-200 pt-5 text-right">
                1+ year
              </h4>
            </div>
            {/*  */}
            <p className="sm:col-span-12 font-bold text-black-200">
              2023 – Present
            </p>
            {/*  */}

            <div className="grid sm:grid-cols-12 pt-[10px]">
              <span className="col-span-1 font-semibold">1-</span>
              <p className="col-span-11 text-white-250">
                Engaged in self-study to build skills in web development,
                focusing on frontend technologies and frameworks.
              </p>
              <span className="col-span-1 pt-2 font-semibold">2-</span>
              <p className="col-span-11 text-white-250 pt-2">
                Developed multiple personal projects, main focus is on
                developing the better cleanable readable code and make the
                better user interface. e.
              </p>
              <span className="col-span-1 pt-2 font-semibold">3-</span>
              <p className="col-span-11 text-white-250 pt-2">
                Enhanced problem-solving and coding skills through practice, and
                participation in coding challenges.
              </p>
            </div>
            {/* Education */}
            <h2 className=" text-xl font-bold text-black-350 pt-5">
              Education
            </h2>
            <div className="grid grid-cols-12 pt-5">
              <div className="col-span-2">
                <img
                  src={university}
                  alt="school-image"
                  className="h-[50px] rounded-full object-contain"
                />
              </div>
              <div className="col-span-8 flex items-center justify-start">
                <span className="text-md font-semibold px-3 sm:px-0">
                  Government College University Faislabad
                </span>
              </div>
              <div className="col-span-2 flex items-center text-white-300">
                2021 - 2025
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-12 pt-5">
              <div className="col-span-2">
                <img
                  src={college}
                  alt="school-image"
                  className="h-[50px] rounded-full object-contain"
                />
              </div>
              <div className="col-span-8 flex items-center justify-start">
                <span className="text-md font-semibold px-3 sm:px-0">
                  Science College
                </span>
              </div>
              <div className="col-span-2 flex items-center text-white-300">
                2019 - 2020
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="grid grid-cols-12 pt-5">
              <div className="col-span-2">
                <img
                  src={school}
                  alt="school-image"
                  className="h-[50px] rounded-full object-contain"
                />
              </div>
              <div className="col-span-8 flex items-center justify-start">
                <span className="text-md font-semibold px-3 sm:px-0">
                  City Cadet Cadre School
                </span>
              </div>
              <div className="col-span-2 flex items-center text-white-300">
                2004 - 2018
              </div>
            </div>
          </div>
          {/* Skill */}
          <div ref={skillRef}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <div className=" pt-5">
                <h2 className="text-xl font-bold">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-1">
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    HTML
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    CSS
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    TailwindCSS
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    JavaScript
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    Typescript
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    Redux Toolkit
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow hover:bg-[#454545]">
                    React
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project */}
          <div className="flex pt-[100px] justify-center ">
            <div className="flex w-full flex-wrap gap-1 justify-center">
              <div
                className="opacity: 1; filter: blur(0px); transform: translateY(-6px) translateZ(0px)"
                ref={projectRef}
              >
                <div className="inline-flex items-center rounded-md border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black-350 text-[#E5E5E5] shadow px-[.7rem] py-[.2rem]">
                  My Projects
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="py-5">
            <h2 className="text-3xl w-full font-bold flex justify-center tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <div className="flex justify-center items-center pt-5">
              <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl text-white-300">
                I'm excited to share my latest projects with you Each project
                represents a unique challenge and showcases my ability to adapt
                and innovate.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="grid gap-4 m-4 sm:grid-cols-12">
            <div className="sm:col-span-6 border border-gray-300 rounded-lg pb-2">
              <a
                className="block cursor-pointer"
                href="https://react-ecommerence-website.vercel.app/"
              >
                <video
                  src={ecommerence}
                  autoPlay
                  loop
                  muted
                  className="pointer-events-none mx-auto h-40 w-full  object-cover object-top border-none outline-none rounded-lg"
                ></video>
              </a>
              <div className="px-2">
                <h3 className="font-semibold tracking-tight mt-1 text-base text-black-350 py-2">
                  E-commerence Website
                </h3>
                <p className="text-sm text-white-300">
                  Welcome to our innovative e-commerce platform, where
                  creativity seamlessly intersects with fashion. In addition to
                  a diverse selection of clothing, we offer a unique
                  functionality that allows users to design their own custom
                  t-shirts.
                </p>
                <div className="pt-16">
                  <LanguageUse />
                </div>
                {/*  */}
                <div className="flex">
                  <div>
                    <a
                      href="https://react-ecommerence-website.vercel.app/"
                      target="_blank"
                    >
                      <Website />
                    </a>
                  </div>
                  <a
                    href="https://github.com/AliArif5781/React-Ecommerence-Website"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Github />
                  </a>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="sm:col-span-6 border border-gray-300 rounded-lg pb-2">
              <a
                className="block cursor-pointer"
                href="https://spotify-ten-lyart.vercel.app/"
              >
                <video
                  src={spotiy}
                  autoPlay
                  loop
                  muted
                  // playsinline=""
                  className="pointer-events-none mx-auto h-40 w-full  object-cover object-top border-none outline-none rounded-lg"
                ></video>
              </a>
              <div className="px-2">
                <h3 className="font-semibold tracking-tight mt-1 text-base text-black-350 py-2">
                  Spotify Clone
                </h3>
                <p className="text-sm text-white-300">
                  In this project, I developed a fully functional Spotify clone
                  that showcases my skills in frontend development and user
                  interface design.User can play/pause and forward and backward
                  the song.
                </p>
                <div className="pt-16">
                  <LanguageUse />
                </div>
                {/*  */}
                <div className="flex">
                  <div>
                    <a
                      href="https://spotify-ten-lyart.vercel.app/"
                      target="_blank"
                    >
                      <Website />
                    </a>
                  </div>
                  <a
                    href="https://github.com/AliArif5781/Spotify"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Github />
                  </a>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 m-4 sm:grid-cols-12">
            <div className=" sm:col-span-6 border border-gray-300 rounded-lg pb-2">
              <a
                className="block cursor-pointer"
                href="https://project-management-board-pi.vercel.app/"
              >
                <video
                  src={pbm}
                  autoPlay
                  loop
                  muted
                  // playsinline=""
                  className="pointer-events-none mx-auto h-40 w-fullobject-cover object-top border-none outline-none rounded-lg"
                ></video>
              </a>
              <div className="px-2">
                <h3 className="font-semibold tracking-tight mt-1 text-base text-black-350 py-2">
                  Project Management Board
                </h3>
                <p className="text-sm text-white-300">
                  Our project management board is a comprehensive tool and
                  enhance productivity within teams.By providing a user-friendly
                  interface, it allows team members to easily create, assign,
                  and track tasks in real-time.User can make his/her project in
                  draft,inProgress and done and also set the priority.
                </p>
                <div>
                  <LanguageUse />
                </div>
                {/*  */}
                <div className="flex">
                  <div>
                    <a
                      href="https://project-management-board-pi.vercel.app/"
                      target="_blank"
                    >
                      <Website />
                    </a>
                  </div>
                  <a
                    href="https://github.com/AliArif5781/Project-Management-Board"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Github />
                  </a>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>

          {/* Get in touch */}
          <div className="pt-3 pb-16 sm:pb-16">
            <div className="flex justify-center py-5">
              <span className="bg-black-350 text-white py-[.2rem] px-[.7rem] rounded-md">
                Contact
              </span>
            </div>
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>{" "}
            </div>
            <ContactUs />
          </div>
        </div>
      </motion.div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-auto shadow-xl shadow-black-350 py-2">
        <div className="flex justify-center items-center border divide-x-2 space-x-5 gap-3 bg-white-150 px-2 py-[.5rem] rounded-full shadow-xl cursor-pointer hover:py-2">
          <div
            onClick={handleSkill}
            className="hover:scale-125 transition-all ease-in-out hover:px-1"
          >
            <CodeXml className="hover:bg-gray-200 hover:scale-125  p-1 rounded-lg transition-all ease-in-out ml-4" />
          </div>
          <div
            onClick={handleProjectSkill}
            className="hover:scale-125 transition-all ease-in-out"
          >
            <ScrollText className="hover:bg-gray-200 hover:scale-125  p-1 rounded-lg transition-all ease-in-out ml-4" />
          </div>
          <a
            href="https://github.com/AliArif5781"
            target="_blank"
            className="hover:scale-125 transition-all ease-in-out"
          >
            <svg
              viewBox="0 0 438.549 438.549"
              className="h-[25px] hover:bg-gray-200 hover:scale-125 size-7  p-1 rounded-lg transition-all ease-in-out ml-4"
            >
              <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-arif-140bb8274/"
            className="hover:scale-125 transition-all ease-in-out hover:px-2"
            target="_blank"
          >
            <Linkedin className="hover:bg-gray-200  p-1 rounded-lg transition-all ease-in-out ml-4" />
          </a>
        </div>
      </div>
    </MotionConfig>
  );
};

export default HeroSection;
