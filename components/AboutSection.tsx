const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "Typescript" },
  { skill: "Rust" },
  { skill: "SQL" },
  { skill: "React.js" },
  { skill: "Node.js"},
  { skill: "Next.js"},
  { skill: "Tensorflow"},
  { skill: "Github Actions"},
  { skill: "AWS (S3, EC2, Lambda)"},
  { skill: "PostgreSQL" },
  { skill: "Tailwind CSS" },
  { skill: "Docker"},
  { skill: "Socket.io" },
  { skill: "Git" },
  { skill: "Power Bi"}
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl mb-10">About Me</h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Who I am
            </h1>
            <p>
              Hey there! I&apos;m a recent graduate who majored in Computer
              Science at Bennington College.
            </p>
            <br />
            <p>
              I&apos;m super excited about building web applications and exploring
              the world of machine learning. What really drives me is the
              opportunity to create responsible software that truly makes a
              positive impact on people&apos;s lives. Let&apos;s connect and chat about
              all things tech!
            </p>
            <br />
            <p>
              Beyond coding, I am exploring my musical side by studying piano as
              well as learning to create my own musical compositions.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Skills and Tools
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
