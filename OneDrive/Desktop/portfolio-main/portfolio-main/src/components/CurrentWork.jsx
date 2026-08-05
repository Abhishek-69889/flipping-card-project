import React from 'react'
import vedx from "../assets/images/vedx.png";


const CurrentWork = () => {
    return (
        <>
            <section id="current-project" className="text-white py-16 px-4 sm:px-6 font-sans">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">🚧 Currently Building</h2>
                    <p className="text-gray-300 text-md mb-6">
                        I'm currently working on a <span className="text-purple-300 text-xl font-bold">VedX Coding School</span> —VedX Coding School is a learning community dedicated to helping students master coding and development skills through practical projects, clear explanations, and real-world examples._
                    </p>
                    <div className="bvedxg-[#1f0032]/50 p-6 rounded-2xl shadow-lg max-w-md mx-auto">
                    <img src={vedx} alt="THis is an image" className='rounded-xl'/>
                        <h3 className="text-xl font-semibold mb-2">VedX Coding School</h3>
                        <p className="text-gray-300 text-sm mb-4">
                           Its goal is to make programming simple, engaging, and career-focused for beginners and aspiring developers.
                        </p>
                        <div className='flex gap-10 items-center justify-center flex-wrap'>

                        <a
                            href="https://github.com/Abhishek-69889/vedx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            View Code
                        </a>
                        <a
                            href="https://vedxians.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            Visit Website
                        </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CurrentWork
