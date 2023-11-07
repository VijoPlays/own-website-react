import emoji from 'react-easy-emoji';

import {
    Proficiency, School, SkillBulletPoints, SocialMedia, SoftwareSkill, WorkExperience
} from './types';

//_globalColor.scss can be updated to change the look of the website.

const loadAnimationDuration: number = 1500;

const githubLink: string = "https://github.com/VijoPlays";

const greeting: string =
  "A passionate Software Developer with experience in building enterprise and other applications for the web. From conception, to the development and improvement, up to the deployment of software.";

const proficiencies: Proficiency[] = [
  {
    stack: "Backend",
    percentage: "90%",
  },
  {
    stack: "DevOps",
    percentage: "70%",
  },
  {
    stack: "Frontend",
    percentage: "60%",
  },
];

const schools: School[] = [
  {
    name: "Heidelberg University",
    logo: require("./assets/images/uni-heidelberg-logo.png"),
    degree: "Bachelor of Science in Medical Informatics",
    duration: "September 2018 - May 2021",
    description:
      "This Bachelor is a course, where the students learn to code, but also get an insight into the intricacies of the day-to-day work of doctors. The goal is to be a Software Engineer, but also to specifically develop software for doctors.",
    descriptionBullets: [
      "In my thesis I completely rewrote an old authentication system and brought it up to current security standards, keeping usability in mind",
      "We mostly coded in Java (Spring Boot), but also learned to deploy software via Docker to JFrog, and wrote health monitoring systems with Vue as a frontend.",
    ],
  },
];

const skillBulletPoints: SkillBulletPoints = {
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developed enterprise and web applications in C#/Java/Go with PostgreSQL"
    ),
    emoji(
      "⚡ Experience in deploying applications via Kubernetes and Docker to Azure, Argo and GitHub"
    ),
    emoji("⚡ Introduced Testing guidelines in previous companies"),
    emoji("⚡ Created various frontends in React and Vue"),
  ],
};

const socialMedias: SocialMedia[] = [
  { className: "icon-button github", icon: "fab fa-github", link: githubLink },
  {
    className: "icon-button linkedin",
    icon: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/alexandervijoott/",
  },
  {
    className: "icon-button stack-overflow",
    icon: "fab fa-stack-overflow",
    link: "https://stackoverflow.com/users/12903844/vijo",
  },
];

// When adding additional software skills add the correct Font Awesome ClassName from: https://fontawesome.com/icons?d=gallery fas and fab instead of brand/solid
const softwareSkills: SoftwareSkill[] = [
  //Backend
  { name: "Java", icon: "fab fa-java" },
  { name: "C#", icon: "fas fa-hashtag" },
  { name: "GoLang", icon: "fas fa-code" },
  { name: "Python", icon: "fab fa-python" },

  //Cloud
  { name: "Kubernetes", icon: "fas fa-cloud" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "Docker", icon: "fab fa-docker" },

  //Frontend
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "TypeScript", icon: "fab fa-js" },
  { name: "ReactJS", icon: "fab fa-react" },
  { name: "Vue", icon: "fab fa-vuejs" },
  { name: "NodeJS", icon: "fab fa-node" },
  { name: "NPM", icon: "fab fa-npm" },
  { name: "HTML-5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "SASS", icon: "fab fa-sass" },
];

const workExperiences: WorkExperience[] = [
  {
    role: "Software Engineer",
    company: "Mmmake GmbH",
    companyLogo: require("./assets/images/mmmake-logo.png"),
    date: "October 2021 – Present",
    description: "C#/Java Backend and Deployment",
    descriptionBullets: [
      "ERP with authentication, messaging and user management for one of the biggest IT firms in Germany.",
      "During downtime I got to work on Teams applications written in React and Go.",
      "Brought Testing guidelines to the company to increase the quality of our products.",
    ],
  },
];

export {
  loadAnimationDuration,
  greeting,
  proficiencies,
  schools,
  skillBulletPoints,
  socialMedias,
  softwareSkills,
  githubLink,
  workExperiences,
};
