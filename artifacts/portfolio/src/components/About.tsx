import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    "Full-Stack Web Development",
    "Drupal & Custom Modules",
    "API Integration & Backend Performance",
    "Hands-On Problem Solver"
  ];

  const techStack = [
    "Drupal", "React", "PHP", "JavaScript", "Node.js", "Laravel", "MySQL", "AWS"
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
              I'm a full-stack developer with 3+ years of agency experience building platforms for enterprise clients. I specialize in Drupal, React, PHP, and modern web architecture. Also a veteran in the Air National Guard.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-400/40 bg-amber-50 text-amber-700 text-sm font-medium" data-testid="badge-military">
              <ShieldCheck className="w-4 h-4" />
              USAF Reserve
            </div>

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
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg bg-white border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all"
                data-testid={`highlight-card-${index}`}
              >
                <div className="w-8 h-8 rounded bg-primary/15 flex items-center justify-center text-amber-700 font-bold text-sm mb-3">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-snug">{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
