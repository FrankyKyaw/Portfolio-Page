const experiences = [
  {
    title: "Help Desk Engineer",
    company: "Bay State IT (MSP)",
    location: "Boston, MA",
    period: "Aug 2025 – Present",
    bullets: [
      "Provide Tier 1/Tier 2 technical support for a diverse portfolio of clients in a fast-paced MSP environment.",
      "Manage Microsoft 365 tenants, including user administration, licensing, and security settings within Microsoft Entra ID.",
      "Troubleshoot and resolve hardware, software, and network connectivity issues, maintaining high SLA standards.",
      "Utilize Datto RMM and Autotask PSA to track and document incident lifecycles.",
    ],
  },
  {
    title: "IT Specialist",
    company: "Bennington College",
    location: "Bennington, VT",
    period: "Jan 2023 – May 2024",
    bullets: [
      "Resolved 5–10 daily help-desk tickets across Windows, macOS, printers, network, and AV setups.",
      "Automated recurring data pulls with Python and SQL, cutting extraction time by 15% and eliminating manual spreadsheets.",
      "Built interactive Power BI dashboards that led to an 8% reduction in telecommunication costs campus-wide.",
      "Authored step-by-step knowledge base documentation for printer setup, software installs, and account recovery.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "SciQuel",
    location: "Allston, MA",
    period: "Mar 2023 – Jun 2023",
    bullets: [
      "Converted 4 Figma mock-ups into responsive React.js pages, collaborating with designers to match desired UI/UX.",
      "Integrated MongoDB with the frontend, ensuring seamless data flow and enhancing application performance.",
      "Implemented bookmarking and annotation features, improving user interaction and retention.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-8 md:pb-24">
        <h1 className="text-center font-bold text-4xl mb-10">Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold">{exp.title}</h2>
                  <p className="text-teal-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">{exp.location}</p>
                </div>
                <span className="mt-2 md:mt-0 text-sm font-medium text-gray-500 dark:text-slate-300 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start space-x-2 text-gray-600 dark:text-slate-300">
                    <span className="text-teal-500 mt-1 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
