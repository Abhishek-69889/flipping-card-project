import React from 'react';
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaPaintBrush,
  FaLock,
  FaChartBar,
} from 'react-icons/fa';

const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-5xl sm:text-6xl text-[#d01968]" />,
    description: "Crafting responsive and accessible UIs using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    icon: <FaDatabase className="text-5xl sm:text-6xl text-[#d01968]" />,
    description: "Building robust APIs and backend logic with Node.js, Express.js, MongoDB, and SQL.",
  },
  {
    title: "Full Stack Web Apps",
    icon: <FaCode className="text-5xl sm:text-6xl text-[#d01968]" />,
    description: "End-to-end development with secure frontend-backend integration and cloud deployment.",
  },
  {
    title: "UI/UX & Design Systems",
    icon: <FaPaintBrush className="text-5xl sm:text-6xl text-[#d01968]" />,
    description: "Designing modern, clean, and intuitive user experiences with responsive layouts and animations.",
  },
  {
    title: "Authentication & Security",
    icon: <FaLock className="text-5xl sm:text-6xl text-[#d01968]" />,
    description: "Implementing JWT authentication, cookie-based sessions, password hashing with Bcrypt, and secure routes.",
  },
  {
    title: "Data Analysis & Dashboards",
    icon: <FaChartBar className="text-5xl sm:text-6xl text-[#d01968]" />,
    description: "Visualizing and analyzing data using Python, Pandas, and charting tools to support business insights.",
  },
];

const Services = () => {
  return (
    <section id="services" className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Services</h2>
        <p className="mb-10">Transforming ideas into intuitive digital experiences</p>

        {/* Mobile Scrollable, Desktop Grid */}
        <div className="md:hidden overflow-x-auto services_scrollbar">
          <div className="flex space-x-6 min-w-full pb-4 snap-x snap-mandatory">
            {services.map((service, index) => (
              <div
                key={index}
                className="snap-center min-w-[280px] max-w-sm flex-shrink-0 bg-white border border-[#d01968ba] rounded-lg shadow-sm dark:bg-black/30"
              >
                <div className="flex justify-center items-center p-6 pb-0">
                  {service.icon}
                </div>
                <div className="p-5 text-left">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.title}
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#d01968ba] rounded-lg shadow-sm dark:bg-black/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105  hover:shadow-lg"
            >
              <div className="flex justify-center items-center p-6 pb-0">
                {service.icon}
              </div>
              <div className="p-5 text-left">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.title}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
