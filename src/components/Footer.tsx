'use client';

import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
  ];

  const services = [
    'Web Design',
    'Mobile Optimization',
    'SEO Services',
    'E-commerce',
    'Maintenance',
    'Consulting'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="bg-text-primary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          {/* Column 1: Company Info */}
          <div className="space-y-6" data-aos="fade-up">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="ml-3 text-xl font-poppins font-bold">
                Business Pro
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We create professional business websites that establish your online presence
              and drive meaningful growth for your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-blue" />
                <span className="text-gray-300">hello@businesspro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-blue" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-blue mt-1" />
                <span className="text-gray-300">
                  123 Business Ave, Suite 100<br />
                  City, ST 12345
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-blue transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-poppins font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-secondary-green transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media & Newsletter */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-poppins font-semibold text-lg">Stay Connected</h3>

            <p className="text-gray-300">
              Follow us on social media for the latest updates and web design tips.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-blue transition-colors duration-200"
                />
                <button className="px-4 py-2 bg-primary-blue hover:bg-cta-hover rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Business Pro. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-blue transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-blue transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
