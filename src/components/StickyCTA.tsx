'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Phone } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 40 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercentage <= 40) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleScheduleCall = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-500 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-primary-blue to-secondary-green shadow-2xl">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-semibold text-lg">
                  Let's build your business online. Talk to us today.
                </p>
                <p className="text-sm opacity-90 hidden sm:block">
                  Free consultation • Quick response • Professional results
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                onClick={handleScheduleCall}
                className="bg-white text-primary-blue hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Call
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDismissed(true)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
