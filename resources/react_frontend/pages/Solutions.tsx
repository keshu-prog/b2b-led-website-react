import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Factory, Heart, GraduationCap, Car } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Office & Corporate',
      description: 'Create productive work environments with energy-efficient LED lighting systems.',
      features: ['Task & Ambient Lighting', 'Circadian Rhythm Support', 'Dimming Controls', 'Energy Management'],
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Increase productivity by 15%', 'Reduce energy costs by 70%', 'Improve employee satisfaction']
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Commercial',
      description: 'Enhance customer experience and product presentation with professional retail lighting.',
      features: ['Accent Lighting', 'Color Rendering >90 CRI', 'Track Systems', 'Display Lighting'],
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Increase sales by 20%', 'Better product visibility', 'Create inviting atmosphere']
    },
    {
      icon: Factory,
      title: 'Industrial & Warehouse',
      description: 'Robust LED solutions for demanding industrial environments and large facilities.',
      features: ['High Bay Lighting', 'Motion Sensors', 'IP65 Protection', 'Maintenance-Free'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Improve safety standards', 'Reduce maintenance costs', '50,000+ hour lifespan']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Specialized lighting solutions for hospitals, clinics, and healthcare facilities.',
      features: ['Circadian Lighting', 'Infection Control', 'Emergency Backup', 'Tunable White'],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Support patient recovery', 'Reduce staff fatigue', 'Meet medical standards']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Optimize learning environments with appropriate lighting for classrooms and campuses.',
      features: ['Classroom Lighting', 'Library Solutions', 'Sports Facilities', 'Energy Efficiency'],
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Enhance learning outcomes', 'Reduce eye strain', 'Lower operational costs']
    },
    {
      icon: Car,
      title: 'Parking & Outdoor',
      description: 'Secure and efficient outdoor lighting solutions for parking lots and public spaces.',
      features: ['Smart Controls', 'Motion Detection', 'Weather Resistant', 'Photocell Sensors'],
      image: 'https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Improve security', 'Reduce light pollution', 'Lower energy consumption']
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
            Industry Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tailored LED lighting solutions for every industry and application
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600">{solution.description}</p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                      Get Solution Quote
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Custom Solutions for Your Industry
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see your industry listed? We create custom LED lighting solutions 
              for any application or environment.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200">
              Discuss Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;