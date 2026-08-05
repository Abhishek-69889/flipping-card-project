import React from 'react';
import Avatar from "../assets/images/Avatar2.0.png";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGit, FaGithub, FaLock
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiPostman, SiCloudinary
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Cookies", icon: <FaLock className="text-purple-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Bcrypt", icon: <FaLock className="text-gray-600" /> },
  { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Git", icon: <FaGit className="text-red-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
];

const About = () => {
  return (
    <main id='about' className="mx-2 bg-black/40 rounded-3xl px-4 w-full py-10 border border-[#d01968ba]">
      <div className="flex flex-col lg:flex-row gap-15 max-w-6xl">
        <img
          src={Avatar}
          className="w-150 mt-10 rounded-xl drop-shadow-[0_1px_5px_rgba(247,37,133,0.8)]"
          alt="avatar"
        />
        <div className="flex-1">
          <h1 className="font-bold text-[28px]">About Me</h1>
          <p>
            I'm Abhishek Tiwari, Software Developer with hands-on experience in full-stack and frontend development using the
MERN stack. Proficient in React.js, Node.js, Express.js, MongoDB, JavaScript, and REST APIs,
with experience building scalable web applications. Dean's List Honoree at IIT Patna (CPI:
8.68/10) with strong problem-solving and software development skills.

          </p>
          <p className=" mt-5">
            With a growing interest in data science, I also enjoy exploring data-driven solutions that combine programming and analytics to solve real-world problems. My journey is driven by curiosity, continuous learning, and the desire to build tools that make a difference.
          </p>
          <p className=" mt-5">
            Whether it’s crafting clean user interfaces, optimizing backend logic, or drawing insights from data — I love turning ideas into functional, elegant digital experiences.
          </p>

          {/* Skills */}
          <section className="py-2">
            <h2 className="font-bold text-[28px] mb-2 ">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="relative group w-16 h-16">
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                    {skill.name}
                  </span>

                  {/* Icon */}
                  <div className="text-5xl transition-transform duration-300 transform group-hover:scale-110">
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
