import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm font-medium">
          © 2026 Leo Afonso
        </div>
        
        <div className="text-xs text-muted-foreground/60 hidden md:block">
          Built with Next.js &amp; deployed on Vercel
        </div>

        <div className="flex items-center gap-5">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-amber-700 transition-colors"
            aria-label="GitHub"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-amber-700 transition-colors"
            aria-label="LinkedIn"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
