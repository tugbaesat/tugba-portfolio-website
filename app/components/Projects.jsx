import html from "../../public/skills/icons8-html-5-96.png";
import css from "../../public/skills/icons8-css3-96.png";
import javascript from "../../public/skills/icons8-javascript-96.png";
import react from "../../public/skills/icons8-react-native-96.png";
import nextjs from "../../public/skills/icons8-nextjs-96.png";
import vuejs from "../../public/skills/icons8-vue-js-96.png";
import tailwind from "../../public/skills/icons8-tailwindcss-96.png";
import bootstrap from "../../public/skills/icons8-bootstrap-96.png";
import firebase from "../../public/skills/icons8-firebase-96.png";
import mongodb from "../../public/skills/icons8-mongodb-96.png";
import git from "../../public/skills/icons8-git-96.png";
import github from "../../public/skills/icons8-github-96.png";
import materialui from "../../public/skills/icons8-material-ui-96.png";
import npm from "../../public/skills/icons8-npm-96.png";
import vscode from "../../public/skills/icons8-visual-studio-code-2019-96.png";
import jquery from "../../public/skills/icons8-jquery-96.png";
import jest from "../../public/skills/icons8-jest-96.png";
import learningApp from "../../public/projects/learning-app.jpg";
import movieApp from "../../public/projects/movie-project.jpg";
import movieNomination from "../../public/projects/movie-nomination.jpg";
import tipCalculator from "../../public/projects/tip-calculator.jpg";
import simon from "../../public/projects/simon-game.jpg";
// import diceeApp from "../../public/projects/dicee-app.jpg";
// import drumKit from "../../public/projects/drum-kit.jpg";
import clipboard from "../../public/projects/clipboard-landing.jpg";
import blogr from "../../public/projects/blogr-landing.jpg";
// import reactForm from "../../public/projects/react-form-app.jpg";
import space from "../../public/projects/space.jpg";

const skillsImages = {
  React: react,
  Nextjs: nextjs,
  Vuejs: vuejs,
  JavaScript: javascript,
  HTML: html,
  CSS: css,
  Tailwind: tailwind,
  Bootstrap: bootstrap,
  Firebase: firebase,
  MongoDB: mongodb,
  Git: git,
  GitHub: github,
  MaterialUI: materialui,
  NPM: npm,
  VSCode: vscode,
  jQuery: jquery,
  Jest: jest,
};

const skillsData = [
  {
    id: 1,
    img: skillsImages.React,
    title: "React.js",
    type: "Frontend Development",
  },
  {
    id: 2,
    img: skillsImages.Nextjs,
    title: "Next.js",
    type: "Frontend Development",
  },
  {
    id: 3,
    img: skillsImages.Vuejs,
    title: "Vue.js",
    type: "Frontend Development",
  },
  {
    id: 4,
    img: skillsImages.JavaScript,
    title: "JavaScript",
    type: "Frontend Development",
  },
  {
    id: 5,
    img: skillsImages.HTML,
    title: "HTML",
    type: "Frontend Development",
  },
  {
    id: 6,
    img: skillsImages.CSS,
    title: "CSS",
    type: "Frontend Development",
  },
  {
    id: 7,
    img: skillsImages.jQuery,
    title: "jQuery",
    type: "Libraries/Frameworks",
  },
  {
    id: 8,
    img: skillsImages.Tailwind,
    title: "Tailwind CSS",
    type: "Libraries/Frameworks",
  },
  {
    id: 9,
    img: skillsImages.Bootstrap,
    title: "Bootstrap",
    type: "Libraries/Frameworks",
  },
  {
    id: 10,
    img: skillsImages.MaterialUI,
    title: "Material UI",
    type: "Libraries/Frameworks",
  },
  {
    id: 11,
    img: skillsImages.NPM,
    title: "npm",
    type: "Libraries/Frameworks",
  },
  {
    id: 12,
    img: skillsImages.Jest,
    title: "Unit Testing (Jest)",
    type: "Testing",
  },
  {
    id: 13,
    img: skillsImages.Git,
    title: "Git",
    type: "Version Control & Collaboration",
  },
  {
    id: 14,
    img: skillsImages.GitHub,
    title: "GitHub",
    type: "Version Control & Collaboration",
  },
  {
    id: 15,
    img: skillsImages.VSCode,
    title: "Visual Studio Code",
    type: "Version Control & Collaboration",
  },
  {
    id: 16,
    img: skillsImages.MongoDB,
    title: "MongoDB",
    type: "Backend Interaction",
  },
  {
    id: 17,
    img: skillsImages.Firebase,
    title: "Firebase",
    type: "Backend Interaction",
  },
];

const projectsData = [
  {
    id: "learnification",
    title: "Learnification - Education Hub",
    description:
      "The project revolves around crafting an interactive learning application that caters to users of diverse ages and skill levels. It aims to offer abroad spectrum of courses across various subjects, ensuring an engaging and enriching educational experience.",
    image: learningApp,
    gitUrl: "https://github.com/tugbaesat/Learnification",
    previewUrl: "https://learn-u-team-7.vercel.app/",
    propertyTitles: [
      "Technology Stack",
      "Collaborative Development",
      "User-Centric Design",
      "Secure Access",
    ],
    properties: [
      "Develop a dynamic learning platform using React-based web app with Next.js. Implement Tailwind CSS for a sleek, responsive design, and utilize MongoDB for efficient data storage.",
      "Adopt a Git workflow for collaborative development, ensuringcode quality, version control, and streamlined teamwork among the development team.",
      "Enhance the user experience through internationalization using Next-Intl,enabling users from various regions to access and interact with the platform in their preferred language.",
      "Ensure secure user access and authentication by integrating Next-Auth, providing a robust authentication system for user data and account management.",
    ],
    skills: [
      skillsImages.React,
      skillsImages.Nextjs,
      skillsImages.Tailwind,
      skillsImages.MongoDB,
    ],
  },
  {
    id: "picture",
    title: "PicturePerfect - Cinematic Explorer",
    description:
      "This project is centered around a movie database powered by The Movie DB API, offering users animmersive experience in exploring movies, casts, ratings, trailers, genres, and related content. Theprimary aim is to create a comprehensive and captivating movie browsing platform.",
    image: movieApp,
    gitUrl: "https://github.com/tugbaesat/movie-project",
    previewUrl: "https://movie-project-tugbaesat.vercel.app/",
    propertyTitles: [
      "Technology Stack",
      "API Integration",
      "Navigation & UX",
      "Responsiveness",
      "Content Pages",
    ],
    properties: [
      "Develop a dynamic web application utilizing HTML, JavaScript, and TailwindCSS to craft a user-friendly and visually appealing interface.",
      "Connect and leverage The Movie DB API to source comprehensive moviedetails, ratings, trailers, and related content, ensuring an expansive database for user exploration.",
      "Implement a consistent and easily accessible navigation bar for seamless movement across various pages and screen sizes, ensuring a user-friendly experience.",
      "Utilize Tailwind CSS for responsive design elements, ensuring the platform'sadaptability to different screen types and providing an optimal viewing experience.",
      "Create dedicated pages for each movie and actor,offering in-depth information and an interactive browsing experience for users seeking detailed insights and implement advanced search and filtering options for users tonavigate the extensive movie and cast database more efficiently.",
    ],
    skills: [skillsImages.HTML, skillsImages.JavaScript, skillsImages.Tailwind],
  },
  {
    id: "nomination",
    title: "Oscars - Movie Nomination Platform",
    description:
      "The project centers around the creation of a Next.js-based webpage, drawing inspiration from theShopify Web Developer Intern Challenge Summer 2021. It's aimed at enabling users to search theOMDB for movies and nominate their top choices. The primary focus is on crafting a seamless userexperience for discovering, selecting, and managing nominated movies.",
    image: movieNomination,
    gitUrl: "https://github.com/tugbaesat/movie-nomination",
    previewUrl: "https://movie-nomination.vercel.app",
    propertyTitles: [
      "Technology Stack",
      "OMDB Integration",
      "Intuitive Nomination System",
      "User-Centric Experience",
    ],
    properties: [
      "Develop a Next.js project integrated with the OMDB API to enable users tosearch, display movie details, and manage nominations efficiently.",
      "Create a robust search functionality connected to the OMDB API, allowingusers to explore comprehensive movie details and nominate their favorite films.",
      "Design and implement an intuitive system that enables users toefficiently manage their selections, facilitating easy additions, removals, and organization of nominated movies.",
      "Focus on designing an interactive and engaging user interface thatstreamlines the browsing, selection, and nomination processes.",
    ],
    skills: [skillsImages.React, skillsImages.Nextjs, skillsImages.Tailwind],
  },
  {
    id: "space",
    title: "Space Tourism Platform",
    description:
      "The project involves creating a comprehensive platform for space tourism enthusiasts, providingengaging and informative content about space travel opportunities. Users will access multi-pagecontent, mirroring a professional design layout for an immersive experience.",
    image: space,
    gitUrl: "https://github.com/tugbaesat/space-tourism-website",
    previewUrl: "https://space-tourism-website-tugbaesat.vercel.app",
    propertyTitles: [
      "Technology Stack",
      "Multi-Page Experience",
      "Responsive Design",
      "Interactive Elements",
    ],
    properties: [
      "Utilize React with Next.js for seamless page rendering and efficient routing.Implement Tailwind CSS for responsive and sleek design elements.",
      "Develop a structured multi-page interface, allowing users to seamlesslynavigate through different sections of space tourism information.",
      "Ensure the platform offers optimal viewing experiences across variousdevices, with layout adjustments for different screen sizes.",
      "Incorporate hover states and interactive features for a user-friendly andengaging browsing experience.",
    ],
    skills: [skillsImages.React, skillsImages.Nextjs, skillsImages.Tailwind],
  },
  {
    id: "tip",
    title: "Splitter - Tip Calculator",
    description:
      "The Tip Calculator is a Frontend Mentor project designed to accurately calculate the tip and the totalcost of the bill per person. It offers a user-friendly interface for efficiently determining theappropriate tip amount based on the total bill and user input.",
    image: tipCalculator,
    gitUrl: "https://github.com/tugbaesat/nextjs-tip-calculator",
    previewUrl: "https://nextjs-tip-calculator.vercel.app/",
    propertyTitles: ["Technology Stack"],
    properties: [
      "Developed using Next.js and React, the project ensures a seamless andinteractive experience for users seeking an accurate breakdown of the tip and the bill amountper person.",
    ],
    skills: [skillsImages.React, skillsImages.Nextjs, skillsImages.Tailwind],
  },
  {
    id: "simon",
    title: "Simon Game",
    description:
      "The Simon Game is an online adaptation of the classic electronic game involving sequences of lightsand sounds. Players engage by replicating random light sequences by pressing colored lenses in thecorrect order. It's a fast-paced game that challenges players with its combination of lights, sounds,and sequence recall.",
    image: simon,
    gitUrl: "https://github.com/tugbaesat/simon-game",
    previewUrl: "https://simon-game-tugbaesat.vercel.app/",
    propertyTitles: ["Technology Stack"],
    properties: [
      "Developed using HTML, CSS, and jQuery, the project focuses on building anengaging and interactive online version of the Simon Game, offering players an immersiveexperience of the classic electronic game's challenges and excitement.",
    ],
    skills: [
      skillsImages.HTML,
      skillsImages.JavaScript,
      skillsImages.jQuery,
      skillsImages.CSS,
    ],
  },
  // {
  //   id: "dice",
  //   title: "Dicee App",
  //   description:
  //     "The Dicee project offers a simple yet entertaining app for two players to engage in a dice game. Luckand excitement reign as players choose a dice, igniting a thrilling competition to determine the winner.",
  //   image: diceeApp,
  //   gitUrl: "https://github.com/tugbaesat/dicee-challenge",
  //   previewUrl: "https://dicee-challenge-tugbaesat.vercel.app/",
  //   propertyTitles: ["Technology Stack"],
  //   properties: [
  //     "Using HTML, CSS, and jQuery, the project provides a user-friendly interfacefor an engaging dice game experience. Players interact with the virtual dice, fostering an elementof chance and fun within the game.",
  //   ],
  //   skills: [
  //     skillsImages.HTML,
  //     skillsImages.JavaScript,
  //     skillsImages.jQuery,
  //     skillsImages.CSS,
  //   ],
  // },
  // {
  //   id: "drum",
  //   title: "Drum Kit",
  //   description:
  //     "The Drum Kit project is an interactive web application allowing users to play various instrumentsusing their keyboard. It provides a virtual drum set, enabling users to create rhythmic tunes andbeats through keyboard inputs.",
  //   image: drumKit,
  //   gitUrl: "https://github.com/tugbaesat/drum-kit",
  //   previewUrl: "https://drum-kit-tugbaesat.vercel.app",
  //   propertyTitles: ["Technology Stack"],
  //   properties: [
  //     "Developed using HTML, CSS, and jQuery, the project delivers an engagingand interactive experience, allowing users to produce music by simply using their computer'skeyboard. The implementation provides an accessible and enjoyable platform for musicalexperimentation and expression.",
  //   ],
  //   skills: [
  //     skillsImages.HTML,
  //     skillsImages.JavaScript,
  //     skillsImages.jQuery,
  //     skillsImages.CSS,
  //   ],
  // },
  {
    id: "clipboard",
    title: "Clipboard Landing Page",
    description:
      "The Clipboard Landing Page, sourced from Frontend Mentor, is designed to replicate a specificlanding page layout with a strong emphasis on responsiveness. The primary goal is to closely matchthe provided design, ensuring it functions seamlessly across various screen sizes.",
    image: clipboard,
    gitUrl: "https://github.com/tugbaesat/clipboard-landing-page-challenge",
    previewUrl: "https://clipboard-landing-page-challenge.vercel.app",
    propertyTitles: ["Technology Stack"],
    properties: [
      "Developed using HTML and CSS, the project emphasizes not only accuracy indesign replication but also responsiveness, ensuring the landing page adjusts effectively acrossdifferent devices and screen sizes.",
    ],
    skills: [skillsImages.HTML, skillsImages.CSS],
  },
  {
    id: "blogr",
    title: "Blogr Landing Page",
    description:
      "The Blogr Landing Page, sourced from Frontend Mentor, is aimed at replicating a specific landingpage layout with a strong emphasis on responsiveness. The primary objective is to closely match theprovided design, ensuring seamless functionality across various screen sizes.",
    image: blogr,
    gitUrl: "https://github.com/tugbaesat/landing-page-challenge",
    previewUrl: "https://blogr-landing-page-tugbaesat.vercel.app",
    propertyTitles: ["Technology Stack"],
    properties: [
      "Developed using HTML, CSS, and Bootstrap, the project underscoresaccuracy in design replication and responsiveness. The inclusion of Bootstrap further enhancesthe adaptability of the landing page, ensuring effective adjustments across different devices andscreen sizes.",
    ],
    skills: [skillsImages.HTML, skillsImages.CSS, skillsImages.Bootstrap],
  },
  // {
  //   id: "react-form",
  //   title: "Form Validation Project with React Hook Form",
  //   description:
  //     "The React Hook Form project is dedicated to form validation, leveraging the functionalities providedby React Hook Form. The primary focus is on implementing robust form validation techniques toensure data integrity and accuracy within user input fields.",
  //   propertyTitles: ["Technology Stack"],
  //   properties: [
  //     "Utilizing Next.js and React, the project aims to showcase form validation capabilities using React Hook Form. This tech stack allows for seamless and efficient renderingand management of form inputs, offering a user-friendly experience while ensuring datavalidation.",
  //   ],
  //   image: reactForm,
  //   gitUrl: "https://github.com/tugbaesat/react-form-app",
  //   previewUrl: "https://react-form-tugbaesat.vercel.app",
  //   skills: [skillsImages.React, skillsImages.Nextjs, skillsImages.Tailwind],
  // },
];

export { skillsData, projectsData };
