export const PROFILE = {
  name: "Franky Kyaw",
  role: "IT & Cloud Engineer",
  tag: "who ships software",
  location: "Boston, MA",
  blurb:
    "Help Desk Engineer at a fast-paced Boston MSP by day — full-stack & cloud builder the rest of the time. I live in the gap between IT operations and software, and I automate everything in between.",
  email: "myothetkyaw10.2000@gmail.com",
  github: "https://github.com/FrankyKyaw",
  linkedin: "https://www.linkedin.com/in/frankykyaw/",
  resume: "/Franky_Kyaw_resume_1.pdf",
};

export const STATS = [
  { value: "2+",  label: "yrs in IT & infra" },
  { value: "1",   label: "app live on the App Store" },
  { value: "10+", label: "projects shipped" },
  { value: "AWS", label: "CP — in progress" },
];

export const TERMINAL: { kind: "cmd" | "out" | "ok"; text: string }[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "franky_kyaw — IT/Cloud engineer + developer" },
  { kind: "cmd", text: "cat ./focus.txt" },
  { kind: "out", text: "Bridging IT operations and software at a Boston MSP." },
  { kind: "cmd", text: "ls ./skills" },
  { kind: "out", text: "microsoft-365/  entra-id/  azure/  aws/  python/  react-native/" },
  { kind: "cmd", text: "./say_hi.sh" },
  { kind: "ok",  text: "✓ open to IT automation & cloud ops roles" },
];

export const SKILLS: Record<string, string[]> = {
  "IT & Cloud": [
    "Microsoft 365", "Entra ID", "Azure", "AWS", "Active Directory",
    "Datto RMM", "Autotask PSA", "VMware", "Intune", "Okta", "PowerShell",
  ],
  "Development": [
    "Python", "TypeScript", "JavaScript", "React.js", "React Native",
    "Next.js", "Django", "SQL", "Docker", "Git", "Power BI",
  ],
};

export interface Project {
  name: string;
  blurb: string;
  image: string;
  tags: string[];
  featured?: boolean;
  stack: string[];
  links: { live?: string; appStore?: string; github?: string };
}

export const PROJECTS: Project[] = [
  {
    name: "Smart Credit AI",
    blurb:
      "A mobile app that finds the best credit-card deals tailored to your spending. Full-stack React Native + Django + AWS EC2. Live on the App Store.",
    image: "/SmartCredit.png",
    tags: ["Mobile", "AI/ML", "Cloud"],
    featured: true,
    stack: ["React Native", "Django", "AWS"],
    links: {
      live: "https://smartcredit.tech/",
      appStore: "https://apps.apple.com/us/app/smart-credit-ai/id6746369971",
    },
  },
  {
    name: "Mock AI Interview",
    blurb:
      "A web app to practice interviews with a virtual AI interviewer that asks, listens and gives feedback in real time.",
    image: "/mockAiInterview.png",
    tags: ["Web", "AI/ML"],
    stack: ["Next.js", "OpenAI", "TypeScript"],
    links: { live: "https://www.mockaiinterview.com/" },
  },
  {
    name: "Personal Finance Tracker",
    blurb:
      "Link your bank accounts and track income, expenses and savings through dynamic, interactive charts.",
    image: "/PersonalFinanceTracker.png",
    tags: ["Web"],
    stack: ["React", "Plaid", "Node"],
    links: { github: "https://github.com/FrankyKyaw/personal-finance-dashboard" },
  },
  {
    name: "Deep Melody LSTM",
    blurb:
      "A deep-learning model that composes choral music with LSTM neural nets in TensorFlow — emulating the style and complexity of real choral writing.",
    image: "/DeepMelodyLSTM.png",
    tags: ["AI/ML"],
    stack: ["TensorFlow", "Python", "LSTM"],
    links: { github: "https://github.com/FrankyKyaw/DeepMelodyLSTM" },
  },
  {
    name: "TextGPT Chat",
    blurb:
      "A real-time chat app with LLM-powered text suggestions for smarter conversations. Built on React, Node and Socket.io.",
    image: "/TextGPT.png",
    tags: ["Web", "AI/ML"],
    stack: ["React", "Socket.io", "Node"],
    links: { github: "https://github.com/FrankyKyaw/TextGPT" },
  },
  {
    name: "Rust REST API",
    blurb:
      "A RESTful API built with the Rocket framework in Rust — full CRUD and query operations with a focus on speed and safety.",
    image: "/Rust_Rest_API.png",
    tags: ["Backend"],
    stack: ["Rust", "Rocket", "SQL"],
    links: { github: "https://github.com/FrankyKyaw/Rust-Rest-API" },
  },
];

export const PROJECT_FILTERS = ["All", "Web", "Mobile", "AI/ML", "Backend", "Cloud"];

export const EXPERIENCE = [
  {
    title: "Help Desk Engineer",
    company: "Bay State IT (MSP)",
    location: "Boston, MA",
    period: "Aug 2025 — Present",
    current: true,
    bullets: [
      "Tier 1/2 support across a diverse portfolio of MSP clients in a fast-paced environment.",
      "Administer Microsoft 365 tenants — users, licensing & security in Microsoft Entra ID.",
      "Resolve hardware, software & network issues while holding high SLA standards.",
      "Track incident lifecycles end-to-end with Datto RMM and Autotask PSA.",
    ],
  },
  {
    title: "IT Specialist",
    company: "Bennington College",
    location: "Bennington, VT",
    period: "Jan 2023 — May 2024",
    current: false,
    bullets: [
      "Resolved 5–10 daily tickets across Windows, macOS, printers, network & AV.",
      "Automated recurring data pulls with Python & SQL — cut extraction time 15%.",
      "Built Power BI dashboards that drove an 8% campus-wide telecom cost reduction.",
      "Authored knowledge-base docs for setup, installs & account recovery.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "SciQuel",
    location: "Allston, MA",
    period: "Mar 2023 — Jun 2023",
    current: false,
    bullets: [
      "Converted 4 Figma mock-ups into responsive React.js pages with designers.",
      "Integrated MongoDB with the frontend for seamless data flow & performance.",
      "Shipped bookmarking & annotation features that improved retention.",
    ],
  },
];
