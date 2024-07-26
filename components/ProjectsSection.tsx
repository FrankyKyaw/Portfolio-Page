import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";


const projects = [
  {
    name: "Deep Melody LSTM",
    description: "A deep learning model that generates choral music using LSTM neural networks.",
    image: "/DeepMelodyLSTM.png",
    github: "https://github.com/FrankyKyaw/DeepMelodyLSTM"
  },
  {
    name: "Chat Application",
    description: "A real-time chat application created with React, Node.js, and Socket.io and integrated with LLM text suggestion.",
    image: "/TextGPT.png",
    github: "https://github.com/FrankyKyaw/TextGPT",
  },
  {
    name: "Habit Management Tool",
    description: "A web app created with React, Firebase, and Tailwind that allows users to login and keep track of their habits.",
    image: "/Habitify.png",
    github: "https://github.com/FrankyKyaw/habitify-web-app",
  },
  {
    name: "Rust Rest API",
    description:
      "This project is a RESTful API developed using the Rocket framework in Rust. The API provides full CRUD (Create, Read, Update, Delete) as well as query operations on the data.",
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
