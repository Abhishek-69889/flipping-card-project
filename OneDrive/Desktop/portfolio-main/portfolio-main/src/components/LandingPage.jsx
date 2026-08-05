import avatar from "../assets/images/Avatar.png"
import { FaLinkedin, FaGithub, FaEnvelope , FaInstagram, FaYoutube } from "react-icons/fa";


const LandingPage = () => {

    return (
        <>
            <main className='rounded-xl mt-10'>
                <div className='flex flex-wrap'>


                    <div className="max-w-xl mx-auto mt-30">
                        <h2 className="text-3xl">Welcome to my portfolio.</h2>
                        <h1 className="text-3xl font-bold mt-5">Hi, I'm Abhishek Tiwari</h1>
                        <h2 className="text-3xl mb-4 font-black my-3 drop-shadow-[0_1px_5px_rgba(247,37,133,0.8)]"><span className='text-[#d01968ba]'>Software</span> Developer</h2>
                        <p className="text-base ">
                            I'm a passionate Full Stack Developer with a strong foundation in frontend and backend technologies.
                            I specialize in building efficient, scalable, and user-friendly web applications.
                        </p>

                        <button className='bg-[#c72cb6] px-10 text-white font-medium rounded-xl py-1 text-center cursor-pointer mt-5'><a href="#project">Project</a></button>
                        <button className='bg-black/30 px-10 rounded-xl py-1 text-center mx-5 cursor-pointer'><a href="https://canva.link/74kd3i6iy1mcet8">Resume</a></button>
                        <button className='bg-[#c72cb6] px-10 text-white font-medium rounded-xl py-1 text-center cursor-pointer mt-5'><a href="https://abhishekportpholio.netlify.app/">First Portfolio</a></button>

                        <div className="flex  gap-8 mt-8 text-2xl text-[#d01968]">
                            <a href="www.linkedin.com/in/abhishek-softweredeveloper" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FaLinkedin className="hover:text-pink-500 transition"/>
                            </a>
                            <a href="https://github.com/Abhishek-69889" target="_blank" rel="noopener noreferrer" title="Github">
                                <FaGithub className="hover:text-pink-500 transition" />
                            </a>
                            <a href="mailto:abhit0396@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                                <FaEnvelope  className="hover:text-pink-500 transition" />
                            </a>
                            <a href="https://www.instagram.com/abhishek_69889/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <FaInstagram className="hover:text-pink-500 transition" />
                            </a>
                            <a href="https://www.youtube.com/@Vedxians" target="_blank" rel="noopener noreferrer" title="YouTube .">
                                <FaYoutube className="hover:text-pink-500 transition" />
                            </a>
                        </div>

                    </div>

                    <img src={avatar} className='w-150 drop-shadow-[0_1px_5px_rgba(247,37,133,0.8)]' alt="" />
                </div>
                <div className="flex justify-center">
                    <a
                        href="#about"
                        className=" bg-[#d01968ba]   animate-bounce text-white text-[30px] w-16 h-16 rounded-full inline-flex items-center justify-center shadow-md hover:bg-[#b0175a] transition"
                    >
                        ↓
                    </a>
                </div>



            </main>
        </>
    )
}

export default LandingPage
