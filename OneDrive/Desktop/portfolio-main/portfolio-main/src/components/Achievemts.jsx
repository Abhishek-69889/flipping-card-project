import React from "react";
import {
  FaCode,
  FaProjectDiagram,
  FaAward,
  FaLaptopCode,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode className="text-4xl" />,
    title: "Hack N Tech Participant",
    description:
      "Participated in Hack N Tech – a 24-hour hackathon organized by the Technology Club, IIT Patna, showcasing problem-solving and teamwork.",
    button: {
      label: "View Certificate",
      link: "https://www.linkedin.com/in/abhishek-softweredeveloper/overlay/1748845307858/single-media-viewer/?profileId=ACoAAE0rA0MB8rYi3Asfuheuj1RlfD-1hRNQVH0",
    },
  },
  {
    icon: <FaAward className="text-4xl" />,
    title: "DSA Mastery",
    description:
      "Solved 250+ DSA problems on platforms like LeetCode and GeeksforGeeks, strengthening core algorithmic skills.",
    links: [
      { label: "LeetCode", url: "https://leetcode.com/u/abhishek_69889/" },
      {
        label: "GFG",
        url: "https://www.geeksforgeeks.org/user/abhit99mh/?_gl=1*6rxpuc*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwsJO4BhDoARIsADDv4vC_7dcIF-kmEgingTm2fkUawLvSDJcqyMX1xRjbxB2f6pOZacDCcsIaAsJBEALw_wcB",
      },
    ],
  },
  {
    icon: <FaAward className="text-4xl" />,
    title: "GSSoc'25 Contributer",
    description:
      "Selected as an open-source contributor to collaborate on real-world projects, enhance technical skills, and contribute meaningful solutions to the developer community.",
  },
  {
    icon: <FaAward className="text-4xl" />,
    title: "Dean’s List Honors",
    description:
      "Achieved Dean’s List honors for both semesters of Year 1 and the 2nd year at IIT Patna for academic excellence.",
  },
  {
    icon: <FaCode className="text-4xl" />,
    title: "50-Day Coding Streak",
    description:
      "Secured a 50-Day Coding Streak Badge on LeetCode in 2025, demonstrating consistency and commitment.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl" />,
    title: "Inter-IIT Coding Finalist",
    description:
      "Finalist in the prestigious Inter-IIT Coding Challenge 2024, competing with top talent across IITs.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievement"
      className="text-white py-20 px-0 sm:px-6 font-sans no-scrollbar"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-3">My Achievements</h2>
        <p className="text-gray-300 text-sm">
          Transforming passion into impactful results through code and
          innovation.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory services_scrollbar px-4 sm:px-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[#1f0032] inline-block align-top text-center p-6 rounded-2xl w-[280px] shrink-0 snap-start
              ${
                idx === 1
                  ? "bg-purple-700 border-2 border-purple-300 shadow-xl"
                  : ""
              }`}
          >
            <div className="mb-4 text-purple-300">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>

            {item.button && (
              <a
                href={item.button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-medium mt-3"
              >
                {item.button.label}
              </a>
            )}

            {item.links && (
              <div className="flex justify-center gap-3 mt-3">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-300 underline hover:text-purple-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
      </div>
    </section>
  );
};

export default Achievements;
