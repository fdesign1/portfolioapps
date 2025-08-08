export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Ice Cream Shop",
    description: "A full-stack e-commerce solution with React,. Features include user authentication, shopping cart, and order management.",
    image: "/img/logo.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "https://cannoblegelats.netlify.app/",
    github: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Industrial Catalog Site",
    description: "A clutch motorcycle catalog site with a modern design, featuring product listings, search functionality with posibiilities to enable also for selling products.",
    image: "/img/hlogo.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://www.google.com",
    github: "https://github.com/username/taskmanager"
  },
  {
    id: 3,
    title: "Trip Car Manager",
    description: "A responsive application for managing trip details, including vehicle information, engine service history, fuel consumption tracking, and route planning. Authentication and data storage",
    image: "/img/fuel.jpg",
    technologies: ["React", "JS", "Firebase"],
    liveDemo: "https://calculadoracombustible.netlify.app/",
    github: "https://github.com/username/weather-dashboard"
  },
    {
    id: 4,
    title: "Rider Statictics",
    description: "Initially the site had hundred of tables hosted in MyPHP admin, I rebuilt it using React, with dynamic tables and real-time search functionality across tables.",
    image: "/img/history.jpg",
    technologies: ["React", "MySQL", "JS"],
    liveDemo: "https://speedwayhistory.netlify.app/",
    github: "https://github.com/username/weather-dashboard"
  },
  {
    id: 5,
    title: "Case Management System",
    description: "I created this app as a personal project to manage my own cases, it features a user-friendly interface for case tracking and management, with daily updates through slack to track issues and progress.",
    image: "/img/management.jpg",
    technologies: ["React", "APIs", "JS"],
    liveDemo: "https://www.google.com/",
    github: "https://github.com/username/weather-dashboard"
  }
];
