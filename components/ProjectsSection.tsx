import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Mock AI Interview",
    description:
      "A mock AI interview web application that allows users to practice their interview skills with a virtual AI interviewer.",
    image: "/mockAiInterview.png",
    link: "https://www.mockaiinterview.com/",
  },
  {
    name: "Personal Finance Tracker",
    description:
      "A personal finance tracker web application that allows users to link their bank accounts and track their income, expenses, and savings with dynamic charts.",
    image: "/PersonalFinanceTracker.png",
    github: "https://github.com/FrankyKyaw/personal-finance-dashboard",
  },
  {
    name: "CodeQuest",
    description:
      "CodeQuest is an interactive learning platform designed to help users master coding through hands-on lessons, coding challenges, and AI-powered feedback.",
    image: "/CodeQuest.png",
    github: "https://github.com/FrankyKyaw/codequest-app",
    link: "https://codequest-8gcdug6w5-frankykyaws-projects.vercel.app/?vercelToolbarCode=cdCR1OXBTHsTjAd",
  },
  {
    name: "Deep Melody LSTM",
    description: `Deep Melody LSTM is a deep learning model designed to generate choral music compositions using Long Short-Term Memory (LSTM) neural networks 
    and TensorFlow. This project aims to create harmoniously rich and melodically intricate musical pieces that 
    emulate the style and complexity of choral music.`,
    image: "/DeepMelodyLSTM.png",
    github: "https://github.com/FrankyKyaw/DeepMelodyLSTM",
  },
  {
    name: "BeFit",
    description:
      "BeFit is a fitness tracking web application that allows users to create their own personalized workout routines and track their fitness journey.",
    image: "/BeFit.png",
    github: "https://github.com/FrankyKyaw/Workout-dashboard",
    link: "https://workout-dashboard-jypbangg8-frankykyaw.vercel.app/",
  },
  {
    name: "LLM powered Chat Application",
    description:
      "A real-time chat application created with React, Node.js, and Socket.io and integrated with LLM text suggestion.",
    image: "/TextGPT.png",
    github: "https://github.com/FrankyKyaw/TextGPT",
  },
  {
    name: "Habit Management Tool",
    description:
      "A web app created with React, Firebase, and Tailwind that allows users to login and keep track of their habits.",
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
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={25}
                          className="hover:-translate-y-0.5 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <FaExternalLinkAlt
                          size={25}
                          className="hover:-translate-y-0.5 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
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
