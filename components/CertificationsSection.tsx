const certifications = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    date: "April 2026",
    inProgress: false,
    badgeClass: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    name: "Microsoft 365 Certified: Fundamentals",
    code: "MS-900",
    issuer: "Microsoft",
    date: "January 2026",
    inProgress: false,
    badgeClass: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    code: "AWS CCP",
    issuer: "Amazon Web Services",
    date: "In Progress",
    inProgress: true,
    badgeClass: "bg-orange-50 border-orange-200 text-orange-700",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications">
      <div className="my-12 pb-12 md:pt-8 md:pb-24">
        <h1 className="text-center font-bold text-4xl mb-10">Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 flex flex-col"
            >
              <span className={`self-start px-3 py-1 rounded-full text-sm font-bold border mb-4 ${cert.badgeClass}`}>
                {cert.code}
              </span>
              <h2 className="font-bold text-lg leading-snug mb-2">{cert.name}</h2>
              <p className="text-gray-500 dark:text-slate-400 text-sm">{cert.issuer}</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-slate-400">{cert.date}</span>
                {cert.inProgress && (
                  <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    In Progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
