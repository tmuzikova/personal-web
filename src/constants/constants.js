import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  github,
  physioreact,
  personalweb,
  sipnplay,
  bootstrap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "navbar_about",
  },
  {
    id: "projects",
    title: "navbar_projects",
  },
  {
    id: "contact",
    title: "navbar_contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

const projects = [
  {
    name: "PhysioReact",
    description: "projects_physioreact_text",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: physioreact,
    source_code_link: "https://github.com/helberan/team-project",
    live_link: "https://helberan.github.io/team-project/",
  },

  {
    name: "Osobní web",
    description: "projects_personalweb_text",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      { name: "framerMotion", color: "blue-text-gradient" },
    ],
    image: personalweb,
    source_code_link: "https://github.com/",
    live_link: "helberan.github.io/team-project/",
  },
  {
    name: "Sip n' Play",
    description: "projects_sipnplay_text",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sipnplay,
    source_code_link: "https://github.com/tmuzikova/codedex-hackathon-24",
    live_link: "https://sipnplay-codedex.netlify.app/",
  },
];

export { technologies, projects };
