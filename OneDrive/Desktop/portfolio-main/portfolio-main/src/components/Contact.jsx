import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#180025]/50 via-[#11001b] to-[#1c0031]/50 px-4 md:px-8 py-16 text-white font-sans rounded-3xl"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 p-6 md:p-8 rounded-xl shadow-md bg-[#ffffff0a]"
        >
          <div>
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent"
              placeholder="Enter message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full transition duration-300"
          >
            ✨ Send Message ✨
          </button>
        </form>
      </div>

      {/* Footer Social Link */}
      <div className="text-center mt-12 text-lg font-medium max-w-md mx-auto px-4">
        Connect with me on multiple platforms — 
        <a
          href="https://my-accounts-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          Explore
        </a>
      </div>
    </section>
  );
};

export default Contact;
