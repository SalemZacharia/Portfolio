import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  sfm,
  telnet,
  tf,
  laravel,
  mysql,
  spring,
  angular,
  net,
  python,
  eco,
  easy,
  raskt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".net",
    icon: net,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Angular",
    icon: angular,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Angular & Ionic / Spring Boot",
    company_name: "SFM Technologies",
    icon: sfm,
    iconBg: "#FEFEFF",
    date: "March 2021 - April 2021",
    points: [
      "This project aims to facilitate administrative procedures for citizens,to lighten waiting rooms (with a view to the Covid19 period).",
      "and to reduce the waiting time thanks to an application where the citizen can reserve a ticket and wait at the place of your convenience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "his project was composed of two applications, a mobile application for customers and an admin part for the CEO and employees of each company that registers for our solution.",
    ],
  },
  {
    title: "Data Extraction",
    company_name: "TELNET",
    icon: telnet,
    iconBg: "#FFFFFF",
    date: "Jun 2022 - Jul 2022",
    points: [
      "I developed a program using Python to extract valuable data from digitized invoices.",
      "The program employed object detection techniques to identify crucial elements such as tables, logos, and text within the invoices.",
      " For this purpose, I utilized popular Python libraries and frameworks, including TensorFlow for object detection and pytesseract for Optical Character Recognition (OCR).",
    ],
  },
  {
    title: "React Native",
    company_name: "TeamSoft",
    icon: tf,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EcoVolunteers",
    description:
      "Ecovolunteers is a social network designed for volunteers to collaborate and work together. It features a 3D component called Ecomee, where users can customize their own Ecomee avatars. Within Ecomee, users can engage in instant chat conversations, create clubs to compete for the top spot based on worldwide activity levels. The platform is dedicated to fostering environmental activities and collective efforts for a sustainable future.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: eco,
    source_code_link: "https://github.com/dhiabj/eco-volunteers",
  },
  {
    name: "EasyQ",
    description:
      "EasyQ is a project comprising two applications, a web application using Angular and a mobile application using Ionic, both supported by a Spring Boot backend. The aim is to streamline administrative processes for citizens during the COVID-19 pandemic. The project offers comprehensive management from application to service counter, featuring a mobile app with a map and itinerary that provides estimated wait times and ticket information.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Ionic",
        color: "pink-text-gradient",
      },
      {
        name: "Spring boot",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: easy,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rasketa",
    description:
      "Rasketa is an online platform for the sale of second-hand tennis items between individuals. It includes features such as favorites, a chat function, and a bidding system allowing users to negotiate and lower prices.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
    ],
    image: raskt,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
