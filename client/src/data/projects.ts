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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and order management.",
    image: "/assets/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "https://example.com",
    github: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/assets/project2.jpg",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://example.com",
    github: "https://github.com/username/taskmanager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
    image: "/assets/project3.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    liveDemo: "https://example.com",
    github: "https://github.com/username/weather-dashboard"
  }
];
