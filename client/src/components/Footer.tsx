import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/matif33',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/fdesign1',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:ferrerasmatias@outlook.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                </Button>
              );
            })}
          </div>
          
          <div className="border-t border-border/40 pt-8">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Matias Ferreras. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with passion in Wrocław, Poland.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
