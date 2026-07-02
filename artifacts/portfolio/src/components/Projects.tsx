'use client';

import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { type Project, projectsData } from '@/lib/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Selected Work</h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-card border border-border rounded-xl p-6 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              <div className="mb-4">
                <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-primary/25">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              
              <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow font-normal">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2 py-0.5 text-xs text-muted-foreground border border-border rounded-md bg-muted/40">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-0.5 text-xs text-muted-foreground border border-border rounded-md bg-muted/40">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-auto w-full py-2.5 px-4 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-primary/8 hover:border-primary/40 hover:text-amber-700 transition-colors"
                data-testid={`btn-view-details-${project.id}`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
