'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Info } from 'lucide-react';
import { type Project } from '@/lib/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content 
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-popover p-6 shadow-xl sm:rounded-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          aria-describedby="project-description"
        >
          {project && (
            <>
              <div className="flex items-center justify-between">
                <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-primary/25">
                  {project.category}
                </span>
                <Dialog.Close asChild>
                  <button 
                    className="rounded-full p-1.5 opacity-60 transition-opacity hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>
              
              <Dialog.Title className="text-2xl font-bold tracking-tight text-foreground mt-2">
                {project.title}
              </Dialog.Title>
              
              <div id="project-description" className="space-y-6 mt-2">
                <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs text-muted-foreground border border-border bg-muted/40 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/8 border border-primary/20 flex items-start gap-3 mt-6">
                  <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">
                    <strong className="text-foreground block mb-1">Case study coming soon.</strong>
                    Check back later for screenshots, architecture diagrams, and a detailed breakdown of the implementation.
                  </p>
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
