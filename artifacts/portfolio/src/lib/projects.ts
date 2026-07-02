export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export const projectsData: Project[] = [
  {
    id: "enterprise-drupal",
    title: "Enterprise Drupal Platform",
    category: "Enterprise Web",
    description: "Built and maintained custom Drupal modules for enterprise clients. Handled form management, user authentication, and performance optimization across multiple high-traffic sites.",
    tech: ["Drupal", "PHP", "PostgreSQL", "JavaScript"]
  },
  {
    id: "scorm-training",
    title: "SCORM Training Platform",
    category: "E-Learning",
    description: "Developed interactive training platform with quiz validation, user progress tracking, and SCORM compliance. Implemented custom form workflows and data persistence.",
    tech: ["Drupal", "JavaScript", "MySQL", "Custom Modules"]
  },
  {
    id: "react-apps",
    title: "React Web Applications",
    category: "Frontend Development",
    description: "Built responsive, component-based interfaces using React and modern JavaScript. Integrated with backend APIs and optimized for performance.",
    tech: ["React", "JavaScript", "CSS3", "API Integration"]
  },
  {
    id: "wordpress-themes",
    title: "WordPress & Custom Themes",
    category: "Web Development",
    description: "Designed and developed multiple WordPress sites with custom themes, plugins, and integrations. Focused on performance, SEO, and user experience.",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL"]
  },
  {
    id: "backend-api",
    title: "Backend API Development",
    category: "Systems Architecture",
    description: "Built and optimized backend services, including data validation, third-party integrations, and performance enhancements. Experience with relational databases and API design.",
    tech: ["Node.js", "PHP", "Laravel", "MySQL", "PostgreSQL"]
  }
];
