
const skills = [
    { skill: "Python" },
    { skill: "JavaScript" },
    { skill: "Typescript" },
    { skill: "Rust" },
    { skill: "SQL" },
    { skill: "React.js" },
    { skill: "Socket.io" },
    { skill: "Git" }
]

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl mb-10">About Me</h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Who I am</h1>
            <p>
              I am a rising senior at Bennington College studying computer
              science.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              non sodales neque sodales ut etiam sit amet. Purus in mollis nunc
              sed. 
            </p>
            <br/>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes.
              Eu nisl nunc mi ipsum faucibus. Mattis aliquam faucibus purus in
              massa tempor. Lorem ipsum dolor sit amet consectetur adipiscing
              elit duis. Tellus cras adipiscing enim eu turpis egestas pretium.
              Et malesuada fames ac turpis egestas maecenas.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {skills.map((item, idx) => {
                    return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
