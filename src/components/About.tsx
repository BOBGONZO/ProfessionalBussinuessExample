'use client';

import { Check, Award, Users, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Years of experience in creating successful business websites'
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'We prioritize your business goals and target audience needs'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Projects completed on time without compromising quality'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Websites designed to convert visitors into customers'
    }
  ];

  const achievements = [
    'Custom design tailored to your brand',
    'Mobile-responsive across all devices',
    'SEO optimized for better search rankings',
    'Fast loading times under 3 seconds',
    'Secure hosting with SSL certificates',
    'Ongoing support and maintenance',
    'Analytics and performance tracking',
    'Social media integration'
  ];

  return (
    <section id="about" className="section-padding bg-custom-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative" data-aos="fade-right">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  {/* Team Working Illustration */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">Expert Team</div>
                      <div className="text-text-secondary text-sm">Professional Developers</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-primary">Web Design</span>
                        <span className="text-primary-blue">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-blue h-2 rounded-full w-[95%] animate-pulse" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-primary">Development</span>
                        <span className="text-secondary-green">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-secondary-green h-2 rounded-full w-[92%] animate-pulse" style={{animationDelay: '0.5s'}} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-primary">SEO Optimization</span>
                        <span className="text-primary-blue">88%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-blue h-2 rounded-full w-[88%] animate-pulse" style={{animationDelay: '1s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">98%</div>
                  <div className="text-xs text-text-secondary">Satisfaction</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-secondary-green rounded-xl shadow-lg p-4 text-white animate-pulse">
                <div className="text-center">
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-xs opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="font-poppins font-semibold text-text-primary mb-6">
                Why Choose Us
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                We specialize in creating professional business websites that not only look stunning
                but also drive real results. Our team combines technical expertise with creative
                design to deliver websites that establish your professional online presence.
              </p>
            </div>

            {/* Why Choose Us Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements List */}
            <div>
              <h3 className="font-poppins font-semibold text-text-primary mb-6">
                What You Get
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement}
                    className="flex items-center space-x-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-secondary-green rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-text-secondary">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
              >
                Learn More About Our Process
                <Award className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
