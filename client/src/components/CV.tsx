import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

export function CV() {
  const handleViewCV = () => {
    // Replace with actual CV URL
    window.open('https://maticv-m.netlify.app/', '_blank');
  };

  const handleDownloadCV = () => {
    // Replace with actual CV download URL
    const link = document.createElement('a');
    link.href = '/img/Mati_CV.pdf';
    link.download = 'Mati_CV.pdf';
    link.click();
  };

  return (
    <section id="cv" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Resume
            </h2>
            <p className="text-lg text-muted-foreground">
              Download or view my complete professional background and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
                <CardDescription>5+ years of experience customer support engineering</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Skills & Expertise</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Frontend: React, JS, TypeScript, Boostrap</li>
                    <li>Backend: Node.js, Express, API</li>
                    <li>Database: PostgreSQL, MySQL</li>
                    <li>Cloud: AWS, Google Cloud, Docker</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recent Experience</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">IT support engineer</p>
                      <p className="text-sm text-muted-foreground">Smartbear -  to Date</p>
                    </div>
                    <div>
                      <p className="font-medium">Data Analyst</p>
                      <p className="text-sm text-muted-foreground">Capgemini • 2021 - 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="text-center">
                <div className="w-48 h-64 mx-auto bg-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-secondary/40">
                  <div className="text-center">
                    <div className="w-16 h-20 bg-primary/20 rounded mx-auto mb-2"></div>
                      <img
    src="/img/cvpreview.png" // Cambia esta ruta por la de tu imagen
    alt="CV Preview"
    className="w-full h-full object-cover rounded"
  />
                    <p className="text-sm text-muted-foreground">CV Preview</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleViewCV} size="lg" className="min-w-40">
                  <Eye className="h-4 w-4 mr-2" />
                  View CV
                </Button>
                <Button onClick={handleDownloadCV} variant="outline" size="lg" className="min-w-40">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
