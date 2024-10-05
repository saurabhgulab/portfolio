import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vetic,
  javarnd,
  trellingfood,
  cognizant,
  freecodecamp,
  sanofi,
  hyvee,
  bloomberg,
  threejs,
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Business & Information Technology Consultant",
    company_name:
      "Trellingfood, Trellingfashion, Trellingmemories & Trelliswelfare",
    icon: trellingfood,
    iconBg: "#000000",
    date: "Feb’2023 – Present",
    points: [
      "With more than 5 years 6 months of experience in Information technology, Software analysis, design, development, implementation & testing of multiple applications.",
      "I provide appropriate Roadmap as per the requirements defined by the Client.",
      "As a Business Consultant, I analyse and address Complex Technical/Non-Technical Challenges to provide innovative solutions to the customers.",
      "was overwhelmed to present my door open for the clients looking for enhancements as well as deliverables related to Software Development, Web-Design, Business Strategy, Digital Marketing and more.",
    ],
  },
  {
    title: "SDE-II Frontend Developer",
    company_name: "Vetic - Pet Care Reimagined | Petpai Technologies Pvt Ltd",
    icon: vetic,
    iconBg: "#383E56",
    date: "Aug’2022 – Feb’2023",
    points: [
      "Closely worked with top industry leaders to initialize and shape perfect Veterinary clinic chains across India starting Delhi NCR using Full Stack Technology.",
      "Directly reported to Engineering Head while developing & implementing the features using TDD.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr. Software Developer",
    company_name: "Java Ventures Pvt Ltd",
    icon: javarnd,
    iconBg: "#ffffff",
    date: "Nov’2021- Apr’2022",
    points: [
      "Worked as a Full Stack Developer for multiple US Clients. Following SDLC approach on projects by utilising Front-End (Html, Css & React) as well as Back-End (Nodejs, MongoDb, Postman) technologies.",
      "Created multiple projects on every tool mentioned in the skills such as Single Page Web Applications, E-Commerce App, Car Rental System, Product Management System and modernizing old web applications.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Cognizant Technologies Solutions Pvt Ltd",
    icon: cognizant,
    iconBg: "#ffffff",
    date: "May'2019 – Oct'2021",
    points: [
      "Was part of Cognizant Digital Business Developers Team working on creating Business Intelligence Solutions.",
      "Member of Full Stack Intelligence Engineers Team – Providing solutions as per the company standards",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Free Code Camp",
    icon: freecodecamp,
    iconBg: "#E6DEDD",
    date: "Jan'2019 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Sanofi – Life Sciences Industry",
    description:
      "Sanofi was the first worldwide supplier of the injectable polio vaccine followed by the first influenza, meningitis, and rabies vaccines. Today, our portfolio of vaccines protects half a billion people worldwide.",
    tags: [
      {
        name: "reactjs",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "white-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sanofi,
    source_code_link: "https://www.sanofiindialtd.com/",
  },
  {
    name: "Bloomberg",
    description:
      "Bloomberg L.P. is a financial, software, data, and media company. The Company provides financial software tools such as an analytics and equity trading platform, data services, and news to financial companies and organizations.",
    tags: [
      {
        name: "reactjs",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bloomberg,
    source_code_link: "https://www.bloomberg.com/asia",
  },
  {
    name: "Hy-Vee - Ailes Online",
    description:
      "A comprehensive travel bookingHy-Vee, Inc. is an employee-owned chain of supermarkets in the Midwestern and Southern United States, with more than 280 locations in Iowa, Illinois, Kansas, Minnesota, Missouri, Nebraska, South Dakota, Wisconsin, with stores planned in Indiana, Kentucky, Tennessee, and Alabama.",
    tags: [
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "less",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "purple-text-gradient",
      },
    ],
    image: hyvee,
    source_code_link: "https://www.hy-vee.com/aisles-online",
  },
];

export { services, technologies, experiences, projects };
