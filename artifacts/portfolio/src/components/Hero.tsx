import React from 'react';
import GeometricCanvas from './GeometricCanvas';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 z-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6">
          <div 
            className="inline-flex items-center px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-amber-700 text-xs font-semibold uppercase tracking-wider"
            data-testid="badge-availability"
          >
            Available for Remote Work
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Full-Stack Developer. <br className="hidden lg:block"/>
            <span className="text-foreground/80 font-normal text-3xl md:text-4xl lg:text-5xl">Agency experience building platforms for enterprise clients.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
            I specialize in custom web development, Drupal architecture, and full-stack problem solving. Open to remote, hybrid, and on-site roles.
          </p>
          
          <div className="pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              data-testid="button-view-work"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative h-[400px] md:h-[600px] w-full mt-12 md:mt-0">
          <GeometricCanvas />
        </div>
      </div>
      
      {/* Subtle amber warmth glow in the background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10" style={{ backgroundColor: 'rgba(245, 158, 11, 0.06)' }} />
    </section>
  );
}
