"use client";
import { Link as ScrollLink } from "react-scroll/modules";

export const HomeSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-48 mb-60 py-16 md:flex-row md:sapce-x-4 md:text-left">
        <div className="md:w-2/3 md:mt-2">
          <h1 className="font-bold text-5xl mt-6">Hi, I'm Myo Thet Kyaw!</h1>
          <h1 className="font-bold text-5xl mt-6 mb-6">
            I am a{" "}
            <span className="font-semibold text-teal-600">
              Placeholder
            </span>
          </h1>
          {/* <ScrollLink
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </ScrollLink> */}
        </div>
      </div>
    </section>
  );
};
