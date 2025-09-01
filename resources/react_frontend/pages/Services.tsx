import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Wrench, Shield, BarChart3, Phone, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'LED Consultation & Design',
      description: 'Expert analysis and custom lighting design tailored to your specific needs and space requirements.',
      features: ['Site Assessment', 'Lighting Analysis', 'Custom Design', 'ROI Calculation', '3D Visualization'],
      process: ['Initial consultation', 'Site survey and measurements', 'Lighting design and calculations', 'Proposal and timeline', 'Project approval'],
      duration: '1-2 weeks',
      price: 'Free with project commitment'
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Certified technicians ensure safe, efficient installation of your LED lighting systems.',
      features: ['Certified Installers', 'Minimal Downtime', 'Safety Compliance', 'Quality Assurance', 'Cleanup Service'],
      process: ['Pre-installation planning', 'Equipment delivery', 'Professional installation', 'System testing', 'Final walkthrough'],
      duration: '1-5 days',
      price: 'Varies by project size'
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance programs to ensure optimal performance and longevity of your LED systems.',
      features: ['Regular Inspections', '24/7 Support', 'Preventive Maintenance', 'Emergency Repairs', 'Performance Monitoring'],
      process: ['Maintenance schedule setup', 'Regular inspections', 'Performance monitoring', 'Preventive maintenance', 'Issue resolution'],
      duration: 'Ongoing',
      price: 'Starting at $99/month'
    },
    {
      icon: BarChart3,
      title: 'Energy Audits',
      description: 'Detailed energy analysis to identify savings opportunities and optimize your lighting efficiency.',
      features: ['Current Usage Analysis', 'Efficiency Assessment', 'Savings Projections', 'Payback Calculations', 'Rebate Identification'],
      process: ['Energy usage review', 'Current system assessment', 'Efficiency analysis', 'Savings calculation', 'Recommendation report'],
      duration: '3-5 days',
      price: '$500-$2,000'
    },
    {
      icon: Phone,
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical assistance for all your LED lighting systems and questions.',
      features: ['Phone Support', 'Remote Diagnostics', 'Troubleshooting', 'System Optimization', 'Training Resources'],
      process: ['Contact support team', 'Issue assessment', 'Remote diagnostics', 'Solution implementation', 'Follow-up'],
      duration: 'Immediate response',
      price: 'Included with maintenance plans'
    },
    {
      icon: CheckCircle,
      title: 'Warranty & Protection',
      description: 'Comprehensive warranty coverage and protection plans for your investment in LED technology.',
      features: ['Extended Warranties', 'Performance Guarantees', 'Replacement Coverage', 'Labor Protection', 'Peace of Mind'],
      process: ['Warranty registration', 'Coverage activation', 'Claim processing', 'Replacement service', 'Performance verification'],
      duration: 'Up to 10 years',
      price: 'Included with products'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Initial Consultation', description: 'Discuss your lighting needs and goals' },
    { number: '02', title: 'Site Assessment', description: 'Comprehensive evaluation of your space' },
    { number: '03', title: 'Custom Proposal', description: 'Detailed plan with specifications and pricing' },
    { number: '04', title: 'Professional Installation', description: 'Expert installation by certified technicians' },
    { number: '05', title: 'Ongoing Support', description: 'Continuous maintenance and support services' }
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
            Professional Services
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complete LED lighting services from consultation to long-term support
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration & Price */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Starting at:</span>
                    <span className="text-sm font-medium text-blue-600">{service.price}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional LED lighting solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your LED Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how we can 
              transform your lighting while saving you money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                Call (555) 123-4567
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;