import React from "react";
import vedx from "../assets/images/vedx.png";
import codexa from "../assets/images/codexa.png";
import quiz from "../assets/images/Frontendquizzer.png";
import photouploader from "../assets/images/photo-uploader.png"
import portfolio from "../assets/images/portfolio.png"

const projects = [
  {
    title: "VedX Coding School",
    description: "A modern learning and interview preparation platform featuring structured learning roadmaps, 217+ DSA problems, quizzes, revision notes, company-wise interview preparation, progress tracking, and mistake tracking. Currently used by 300+ learners, including users from the USA, Russia, Moldova, and India.",
    image: vedx, // Use your own screenshot
    tag: "Frontend",
    link: "https://github.com/Abhishek-69889/Vedx",
    liveLink:'https://vedxians.vercel.app/'
  },
  {
    title: "Frontend Quiz",
    description: "To help users prepare for interviews with step-by-step quizzes on HTML, CSS, JS, React, and more.",
    image: quiz, // Use your own screenshot
    tag: "Frontend",
    link: "https://github.com/Abhishek-69889/Frontend_Quiz",
    liveLink:'https://frontendquizzer.netlify.app/'
  },
  {
    title: "Frontend CodeIDE",
    description: "A live code editor for HTML, CSS, JS with real-time preview and responsive layout.",
    image: codexa, // Use your own screenshot
    tag: "Web App",
    link: "https://github.com/Abhishek-69889/Frontend_IDE",
  },
  {
    title: "Photo Uploader",
    description: "An image uploader with drag & drop, real-time preview, and file validation.",
    image: photouploader,
    tag: "Web App",
    link: "https://github.com/Abhishek-69889/PhotoUploader",
  },
  {
    title: "Old Portfolio",
    description: "My first personal portfolio showcasing projects, about section, and animations.",
    image: portfolio,
    tag: "Portfolio",
    link: "https://abhishekportpholio.netlify.app/",
  },
];

const Projects = () => {
  return (
    
    <section id="project" className="bg-gradient-to-b from-[#1a002d]/50 to-[#090021]/50 rounded-3xl py-16 px-4 text-white font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">My Projects</h2>
        <p className="text-gray-300">Discover the projects that showcase my passion for development and design.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f0032] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">{project.tag}</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex  items-center flex-wrap">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline text-sm"
              >
                Get the project →
              </a>
              {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 ml-10 bg-purple-600 text-white  p-2 rounded  hover:underline text-sm"
                  >
                    Live Demo 
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition">
          <a href="https://github.com/Abhishek-69889/">
          See All →
          </a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
