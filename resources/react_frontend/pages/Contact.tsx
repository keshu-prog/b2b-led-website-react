import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, HelpCircle, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 8AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@luminatech.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: '123 LED Street, Tech City, TC 12345',
      subtitle: 'Visit our showroom'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8AM - 6PM',
      subtitle: 'Emergency support available'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '456 Broadway, Suite 100, New York, NY 10013',
      phone: '+1 (555) 123-4567',
      email: 'ny@luminatech.com'
    },
    {
      city: 'Los Angeles',
      address: '789 Sunset Blvd, Suite 200, Los Angeles, CA 90028',
      phone: '+1 (555) 234-5678',
      email: 'la@luminatech.com'
    },
    {
      city: 'Chicago',
      address: '321 Michigan Ave, Suite 300, Chicago, IL 60601',
      phone: '+1 (555) 345-6789',
      email: 'chicago@luminatech.com'
    },
    {
      city: 'Dallas',
      address: '654 Main Street, Suite 400, Dallas, TX 75201',
      phone: '+1 (555) 456-7890',
      email: 'dallas@luminatech.com'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical LED installation take?',
      answer: 'Installation time varies based on project size and complexity. Small office installations typically take 1-2 days, while large commercial projects may take 1-2 weeks. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'What warranty do you provide on LED lighting systems?',
      answer: 'We offer comprehensive warranties ranging from 5-10 years depending on the product. This includes both manufacturer warranties on LED fixtures and our own warranty on installation workmanship.'
    },
    {
      question: 'Can you help with energy rebates and incentives?',
      answer: 'Absolutely! We help identify and apply for available energy rebates, utility incentives, and tax credits. Our team stays current on all local, state, and federal programs that can help offset your LED upgrade costs.'
    },
    {
      question: 'Do you provide maintenance services after installation?',
      answer: 'Yes, we offer comprehensive maintenance programs including regular inspections, performance monitoring, and 24/7 support. Our maintenance plans ensure optimal performance and longevity of your LED systems.'
    },
    {
      question: 'How much can I save by switching to LED lighting?',
      answer: 'Most businesses see 60-80% reduction in lighting energy costs. The exact savings depend on your current lighting, usage patterns, and local electricity rates. We provide detailed ROI calculations during our free consultation.'
    },
    {
      question: 'Do you work with existing electrical contractors?',
      answer: 'Yes, we can work with your preferred electrical contractors or recommend certified partners in your area. We coordinate with all stakeholders to ensure smooth project execution.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our LED lighting experts for a free consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-500">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Get a Free Consultation</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="office">Office Lighting</option>
                      <option value="retail">Retail Lighting</option>
                      <option value="industrial">Industrial Lighting</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="education">Educational Institution</option>
                      <option value="outdoor">Outdoor Lighting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (Within 30 days)</option>
                      <option value="soon">Soon (1-3 months)</option>
                      <option value="planning">Planning (3-6 months)</option>
                      <option value="future">Future (6+ months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your lighting needs, space size, current challenges, etc."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Locations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{office.city}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl p-8 text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  Find our nearest office location and get directions
                </p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View All Locations
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our LED lighting services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your question answered?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;