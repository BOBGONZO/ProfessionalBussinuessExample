'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Globe,
  Smartphone,
  Search,
  Zap,
  Shield,
  BarChart3,
  Paintbrush,
  HeadphonesIcon
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web Design',
      description: 'Tailor-made websites that reflect your brand identity and engage your target audience effectively.',
      features: ['Responsive Design', 'Brand Integration', 'User Experience']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Fully responsive designs that look and perform flawlessly on all devices and screen sizes.',
      features: ['Mobile-First', 'Touch Optimized', 'Fast Loading']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices to help your website rank higher and attract more organic traffic.',
      features: ['On-Page SEO', 'Meta Optimization', 'Schema Markup']
    },
    {
      icon: Zap,
      title: 'Performance & Speed',
      description: 'Lightning-fast websites optimized for performance, ensuring excellent user experience.',
      features: ['Fast Loading', 'Optimized Code', 'CDN Integration']
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security measures to protect your website and customer data.',
      features: ['SSL Certificates', 'Regular Backups', 'Security Monitoring']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics setup to track performance and understand your audience.',
      features: ['Google Analytics', 'Conversion Tracking', 'Performance Reports']
    },
    {
      icon: Paintbrush,
      title: 'Brand Integration',
      description: 'Seamless integration of your brand elements for a cohesive professional appearance.',
      features: ['Logo Integration', 'Color Schemes', 'Typography']
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to keep your website running smoothly.',
      features: ['Technical Support', 'Regular Updates', 'Quick Response']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins font-semibold text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive web solutions to establish and grow your professional online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-hover bg-white border-0 shadow-lg group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="font-poppins text-lg text-text-primary group-hover:text-primary-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <CardDescription className="text-text-secondary leading-relaxed">
                  {service.description}
                </CardDescription>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-center text-sm text-text-secondary"
                    >
                      <div className="w-2 h-2 bg-secondary-green rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-primary-blue to-secondary-green rounded-2xl p-8 text-white">
            <h3 className="font-poppins text-2xl font-semibold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
