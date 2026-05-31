const itSkills = [
  "Microsoft 365",
  "Entra ID",
  "Azure",
  "AWS",
  "Active Directory",
  "Datto RMM",
  "Autotask PSA",
  "VMware",
  "Docker",
  "PowerShell",
  "Okta",
  "Intune",
];

const devSkills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React.js",
  "React Native",
  "Django",
  "Next.js",
  "Bash",
  "Git",
  "Power BI",
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-24">
        <h1 className="text-center font-bold text-4xl mb-10">About Me</h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">Who I am</h2>
            <p>
              I&apos;m a Computer Science graduate from Bennington College currently working as a Help Desk
              Engineer at Bay State IT, a fast-paced MSP in Boston. I support a diverse portfolio of clients
              across Microsoft 365, Entra ID, networking, and endpoint management.
            </p>
            <br />
            <p>
              What sets me apart is my software development background — I&apos;ve built full-stack web and
              mobile applications, worked with cloud infrastructure, and automated data workflows. I&apos;m
              currently focused on growing into IT automation and cloud operations, and pursuing my AWS Cloud
              Practitioner certification.
            </p>
            <br />
            <p>
              Outside of tech, I enjoy exploring music — studying piano and experimenting with my own
              compositions.
            </p>
          </div>
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-center text-2xl font-bold mb-4 md:text-left">IT &amp; Cloud</h2>
              <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {itSkills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 mr-2 mt-2 rounded-lg font-semibold text-sm"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl font-bold mb-4 md:text-left">Development</h2>
              <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {devSkills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-4 py-2 mr-2 mt-2 rounded-lg font-semibold text-sm"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
