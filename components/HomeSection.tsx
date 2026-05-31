"use client";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll/modules";

export const HomeSection = () => {
  return (
    <section id="home" className="w-full bg-slate-900 min-h-screen flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl w-full">
        <div className="flex flex-col text-center items-center justify-center py-32 md:text-left md:items-start">
          <p className="text-teal-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="font-bold text-5xl md:text-6xl text-white">
            Hi, I&apos;m Franky Kyaw
          </h1>
          <h2 className="font-semibold text-3xl md:text-4xl mt-4 text-slate-300">
            <span className="text-teal-400">IT Engineer</span> &amp; Developer
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            Based in Boston, MA — bridging IT operations and software development at a fast-paced MSP.
          </p>
          <div className="flex flex-row items-center space-x-4 mt-8">
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer transition-colors"
            >
              Get in Touch
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
              className="border border-slate-500 hover:border-teal-400 text-slate-300 hover:text-teal-400 font-semibold px-6 py-3 rounded-lg cursor-pointer transition-colors"
            >
              View Projects
            </ScrollLink>
          </div>
          <div className="flex flex-row items-center space-x-4 mt-8">
            <a href="https://github.com/FrankyKyaw" target="_blank" rel="noreferrer">
              <AiOutlineGithub
                size={30}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/frankykyaw/" target="_blank" rel="noreferrer">
              <AiOutlineLinkedin
                size={30}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
