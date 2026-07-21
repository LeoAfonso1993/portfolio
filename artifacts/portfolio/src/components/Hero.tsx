import React from 'react';
import GeometricCanvas from './GeometricCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden bg-background"
    >
      {/* Geometric animation — full-section background, behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <GeometricCanvas />
      </div>

      {/* Subtle amber warmth glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none z-0"
        style={{ backgroundColor: 'rgba(245, 158, 11, 0.07)' }}
      />

      {/* Text content — floats in front of the animation */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl flex flex-col items-start text-left space-y-6">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-amber-700 text-xs font-semibold uppercase tracking-wider"
            data-testid="badge-availability"
          >
            AVAILABLE FOR REMOTE • HYBRID • ON-SITE
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Full-Stack Developer.{' '}
            <br className="hidden lg:block" />
            <span className="text-foreground/80 font-normal text-3xl md:text-4xl lg:text-5xl">
              Turning complex business problems into reliable software.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-normal leading-relaxed">
            I develop scalable web applications with PHP, JavaScript, Drupal, Laravel, and modern development practices—from architecture to deployment.
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
      </div>
    </section>
  );
}
