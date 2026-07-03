export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export const projectsData: Project[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    category: "Full Stack Development",
    description: "Custom full-stack solutions combining React frontends with robust PHP/Node.js backends. End-to-end application development with performance and scalability in mind.",
    tech: ["React", "PHP", "Node.js", "JavaScript", "MySQL", "PostgreSQL", "API Design"]
  },
  {
    id: "drupal",
    title: "Drupal Development",
    category: "Drupal Specialization",
    description: "Expert custom Drupal module development, form management, user authentication systems, and performance optimization for enterprise-scale platforms.",
    tech: ["Drupal", "PHP", "PostgreSQL", "JavaScript", "Custom Modules", "SCORM Compliance"]
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    category: "WordPress & Web Solutions",
    description: "Custom WordPress theme design and development, plugin integration, performance tuning, and SEO optimization for high-traffic sites.",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL", "Custom Themes", "SEO"]
  }
];
