import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-automt-8 bg-neutral-200"></hr>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="text-neutral-500 dark:text-neutral-100">@2024 Franky Kyaw</div>
        <div className="flex flex-row justify-center items-center space-x-2 mb-2">
          <a href="https://github.com/FrankyKyaw" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/frankykyaw"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/myo-thet-kyaw-092110180/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
