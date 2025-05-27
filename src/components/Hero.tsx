'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-custom-bg pt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="800">
            <div className="space-y-6">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight">
                Professional
                <span className="text-primary-blue"> Business</span>
                <br />
                Websites
              </h1>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
                Custom-designed websites that establish your professional online presence
                and drive meaningful business growth.
              </p>
            </div>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('services')}
                className="btn-primary group"
                size="lg"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="btn-secondary group"
                size="lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">50+</div>
                <div className="text-sm text-text-secondary">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">98%</div>
                <div className="text-sm text-text-secondary">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">24/7</div>
                <div className="text-sm text-text-secondary">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Illustration */}
          <div className="relative" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-green/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />

              {/* Main Illustration Container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="space-y-6">
                  {/* Browser Window Mockup */}
                  <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-primary-blue/20 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-5/6" />
                      <div className="flex space-x-2">
                        <div className="h-8 bg-primary-blue rounded w-20" />
                        <div className="h-8 bg-gray-200 rounded w-20" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="bg-white rounded-2xl shadow-xl p-4 w-48 ml-auto transform hover:scale-105 transition-transform duration-300">
                    <div className="space-y-2">
                      <div className="h-2 bg-primary-blue/30 rounded w-1/2" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-3/4" />
                      <div className="h-6 bg-secondary-green rounded w-full mt-3" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-green rounded-2xl flex items-center justify-center text-white font-bold animate-bounce">
                    ✓
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl animate-spin-slow">
                    ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-secondary/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
