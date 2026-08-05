import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "VedX Coding School",
    location: "Lucknow, Uttar Pradesh, India",
    duration: "January 2026 – June 2026",
    status: "Self-Employed",
    points: [
      "Developed and maintained the official VedX Coding School platform using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Vite.",
      "Built reusable React components using React Hooks for a scalable and maintainable frontend architecture.",
      "Designed responsive, mobile-friendly interfaces ensuring seamless user experience across devices.",
      "Improved page load performance by 40% through lazy loading and code splitting."
    ]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "HCL GUVI",
    location: "Remote",
    duration: "June 2025 – September 2025",
    status: "Internship",
    points: [
      "Developed full-stack web applications using the MERN stack.",
      "Built responsive user interfaces with React.js, Tailwind CSS, HTML5, CSS3, and JavaScript.",
      "Designed REST APIs using Express.js and MongoDB.",
      "Collaborated with mentors to develop new features and resolve production issues.",
      "Optimized application performance, deployment, and maintenance."
    ]
  },
  {
    title: "Software Developer",
    company: "Hanumant Technology Pvt. Ltd.",
    location: "Lucknow, Uttar Pradesh, India",
    duration: "January 2025 – June 2025",
    status: "Full-Time",
    points: [
      "Developed MERN stack web applications with scalable backend APIs.",
      "Built 15+ reusable React components, reducing development time by 30%.",
      "Designed MongoDB database schemas and integrated backend services.",
      "Implemented JWT authentication and bcrypt password hashing.",
      "Deployed and monitored applications on cloud platforms."
    ]
  }
];

const Experience = () => {
  return (
    <div id="experience">
      <hr
        className="mt-10 border-4 rounded-3xl border-[#c72cb6]
        w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto"
      />

      <section className="py-20 px-6 text-white font-sans">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Experience</h2>
          <p className="text-gray-400">
            My professional journey in frontend and full-stack development.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1f0032]/30 border border-purple-600 rounded-xl p-7 shadow-lg hover:shadow-purple-600/30 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <FaBriefcase className="text-purple-400" />
                    {exp.title}
                  </h3>

                  <p className="text-purple-300 mt-1">
                    {exp.company} • {exp.location}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {exp.duration}
                  </p>
                </div>

                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.status}
                </span>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr
        className="mt-10 border-4 rounded-3xl border-[#c72cb6]
        w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto"
      />
    </div>
  );
};

export default Experience;