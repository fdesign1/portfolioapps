import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm{' '}
            <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="min-w-40">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-40"
              onClick={() => document.getElementById('hire-me')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          <div className="mt-16">
            <button
              onClick={scrollToProjects}
              className="animate-bounce p-2 rounded-full hover:bg-secondary/50 transition-colors"
              aria-label="Scroll to projects"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
