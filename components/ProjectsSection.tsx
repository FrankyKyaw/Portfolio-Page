import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt, FaAppStore } from "react-icons/fa";

const projects = [
  {
    name: "Smart Credit AI",
    description:
      "A mobile app that helps users find the best credit card deals tailored to their spending habits. Built full-stack with React Native, Django, and AWS EC2. Live on the App Store.",
    image: "/SmartCredit.png",
    link: "https://smartcredit.tech/",
    appStore: "https://apps.apple.com/us/app/smart-credit-ai/id6746369971",
  },
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
    name: "Deep Melody LSTM",
    description:
      "A deep learning model that generates choral music compositions using LSTM neural networks and TensorFlow, emulating the style and complexity of choral music.",
    image: "/DeepMelodyLSTM.png",
    github: "https://github.com/FrankyKyaw/DeepMelodyLSTM",
  },
  {
    name: "LLM Powered Chat Application",
    description:
      "A real-time chat application built with React, Node.js, and Socket.io, integrated with LLM text suggestion for smarter conversations.",
    image: "/TextGPT.png",
    github: "https://github.com/FrankyKyaw/TextGPT",
  },
  {
    name: "Rust REST API",
    description:
      "A RESTful API developed using the Rocket framework in Rust, providing full CRUD and query operations on the data.",
    image: "/Rust_Rest_API.png",
    github: "https://github.com/FrankyKyaw/Rust-Rest-API",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl mb-10">Projects</h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className={`mt-12 md:w-1/2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  className="rounded-xl shadow-xl hover:opacity-70 transition-opacity"
                />
              </div>
              <div className={`mt-12 md:w-1/2 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
                <p className="text-xl">{project.description}</p>
                <div className="flex space-x-4 mt-6">
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
                  {project.appStore && (
                    <Link href={project.appStore} target="_blank">
                      <FaAppStore
                        size={25}
                        className="hover:-translate-y-0.5 transition-transform cursor-pointer"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
