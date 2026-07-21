import React from 'react';
import {
  Server,
  Gauge,
  Workflow,
  Plug,
} from "lucide-react";

export default function About() {
  const highlights = [
  {
    title: "Backend Development",
    description:
      "Building scalable PHP applications, designing APIs, and structuring maintainable backend systems.",
    icon: Server,
  },
  {
    title: "Performance & Optimization",
    description:
      "Improving application performance, debugging production issues, optimizing databases, and delivering reliable software.",
    icon: Gauge,
  },
  {
    title: "Modern Development",
    description:
      "Git workflows, Docker, CI/CD, Agile collaboration, and production-ready development practices.",
    icon: Workflow,
  },
  {
    title: "API Integrations",
    description:
      "Connecting third-party services, REST APIs, authentication, and backend data synchronization.",
    icon: Plug,
  },
];

  const techStack = [
    "PHP",
    "JavaScript",
    "Laravel",
    "React",
    "Drupal",
    "MySQL",
    "Docker",
    "Git"
  ];

  return (
    <section id="about" className="section-teal py-24 border-y border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About</h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-normal">
              I'm a full-stack developer with 3+ years of experience building and maintaining production software for enterprise organizations. I've worked across Drupal, Laravel, React, and custom PHP applications, helping clients modernize platforms, solve complex technical challenges, and deliver reliable software. Outside of development, I serve in the U.S. Air National Guard, where I've strengthened the discipline and problem-solving mindset I bring to every project.
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Core Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-md bg-white border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    data-testid={`tech-pill-${tech.toLowerCase().replace('.', '')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-white border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all"
                  data-testid={`highlight-card-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-amber-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">
                    {highlight.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
