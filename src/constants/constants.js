import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  threejs,
  physioreact,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Workout App",
    description: "projects_workoutapp_text",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: physioreact,
    source_code_link: "https://github.com/",
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
    image: physioreact,
    source_code_link: "https://github.com/",
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
    image: physioreact,
    source_code_link: "https://github.com/",
  },
];

export { technologies, projects };
