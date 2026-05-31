import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-24 md:pt-8">
        <h1 className="text-center font-bold text-4xl mb-4">Get In Touch</h1>
        <p className="text-center text-gray-500 dark:text-slate-400 mb-12 max-w-xl mx-auto">
          Whether you&apos;re looking to collaborate, have a question, or just want to say hello — my inbox is always open.
        </p>
        <div className="max-w-lg mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-8">
          <div className="space-y-6">
            <a
              href="mailto:myothetkyaw10.2000@gmail.com"
              className="flex items-center space-x-4 group"
            >
              <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg shrink-0">
                <AiOutlineMail size={24} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400">Email</p>
                <p className="font-semibold group-hover:text-teal-600 transition-colors">
                  myothetkyaw10.2000@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/frankykyaw/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 group"
            >
              <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg shrink-0">
                <AiOutlineLinkedin size={24} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400">LinkedIn</p>
                <p className="font-semibold group-hover:text-teal-600 transition-colors">
                  linkedin.com/in/frankykyaw
                </p>
              </div>
            </a>

            <a
              href="https://github.com/FrankyKyaw"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 group"
            >
              <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg shrink-0">
                <AiOutlineGithub size={24} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400">GitHub</p>
                <p className="font-semibold group-hover:text-teal-600 transition-colors">
                  github.com/FrankyKyaw
                </p>
              </div>
            </a>

            <div className="pt-2 border-t border-gray-100 dark:border-slate-700">
              <a
                href="/Franky_Kyaw_resume_1.pdf"
                target="_blank"
                className="w-full block text-center bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
