import React from 'react';

export default function NavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#" 
          className="text-amber-700 font-bold text-xl tracking-tight hover:text-amber-800 transition-colors"
          data-testid="link-home"
        >
          Leo Afonso
        </a>
        <nav className="flex items-center gap-6">
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-about"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-projects"
          >
            Work
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
