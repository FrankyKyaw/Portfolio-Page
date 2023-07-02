import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Chat Application",
    description: "A real-time chat application with suggestion tool",
    image: "/TextGPT.png",
    github: "https://github.com/FrankyKyaw/TextGPT",
  },
  {
    name: "Habit Management Tool",
    description: "A web app to track and manage habits",
    image: "/Habitify.png",
    github: "https://github.com/FrankyKyaw/habitify-web-app",
  },
  {
    name: "Stock Prices Tool",
    description:
      "A tool to calculate stock price changes and display relevant news",
    image: "/Rust_Rest_API.png",
    github: "https://github.com/FrankyKyaw/Rust-Rest-API",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl mb-10">Projects</h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-12 md:w-1/2">
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl">{project.description}</p>
                  <div className="flex space-x-4 mt-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub size={25} className="hover:-translate-y-0.5 transition-transform cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
