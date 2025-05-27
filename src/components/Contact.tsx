'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@businesspro.com',
      action: 'mailto:hello@businesspro.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: '123 Business Ave, Suite 100, City, ST 12345',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Mon-Fri: 9AM-6PM EST',
      action: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins font-semibold text-text-primary mb-4">
            Let's Build Your Professional Website
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to establish your professional online presence? Get in touch with us today
            and let's discuss how we can help grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-text-primary">
                  Get a Free Quote
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`transition-all duration-200 ${
                          errors.name
                            ? 'border-alert-red focus:border-alert-red'
                            : 'focus:border-primary-blue'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-alert-red text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`transition-all duration-200 ${
                          errors.email
                            ? 'border-alert-red focus:border-alert-red'
                            : 'focus:border-primary-blue'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-alert-red text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="focus:border-primary-blue transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your project *"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`transition-all duration-200 resize-none ${
                        errors.message
                          ? 'border-alert-red focus:border-alert-red'
                          : 'focus:border-primary-blue'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-alert-red text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-secondary-green/10 border border-secondary-green/20 rounded-lg">
                      <p className="text-secondary-green font-medium">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-alert-red/10 border border-alert-red/20 rounded-lg">
                      <p className="text-alert-red font-medium">
                        Sorry, there was an error sending your message. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 p-4 bg-custom-bg rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => info.action !== '#' && window.open(info.action)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                    <p className="text-text-secondary text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-blue mx-auto mb-2" />
                  <p className="text-text-secondary">Interactive Map</p>
                  <p className="text-sm text-text-secondary">123 Business Ave, Suite 100</p>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="bg-gradient-to-br from-primary-blue to-secondary-green rounded-2xl p-8 text-white" data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-poppins text-xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="opacity-90 mb-4">
                Schedule a free consultation call to discuss your project requirements and get a personalized quote.
              </p>
              <Button
                className="bg-white text-primary-blue hover:bg-gray-100 transition-colors duration-200"
                onClick={() => window.open('tel:+15551234567')}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
