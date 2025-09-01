import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Mitchell',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in LED technology and business development'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'LED innovation expert with 12+ years in lighting design'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Operations specialist ensuring seamless project delivery'
    },
    {
      name: 'Emily Johnson',
      role: 'Director of Sales',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'B2B sales leader with expertise in lighting solutions'
    }
  ];

  const timeline = [
    { year: '2008', event: 'Company founded with vision to revolutionize commercial lighting' },
    { year: '2012', event: 'Completed first major corporate LED retrofit project' },
    { year: '2015', event: 'Expanded nationwide with 500+ successful installations' },
    { year: '2018', event: 'Introduced smart lighting and IoT integration services' },
    { year: '2021', event: 'Achieved carbon neutral operations and 1,000+ projects' },
    { year: '2024', event: 'Leading LED provider with 1,500+ projects and $25M+ in energy savings' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously advancing LED technology to provide cutting-edge solutions'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Delivering consistent, high-quality results with every project'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships through exceptional service and support'
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and energy efficiency'
    }
  ];

  const certifications = [
    'ENERGY STAR Partner',
    'LED Professional Certified',
    'NECA Member',
    'OSHA Safety Certified',
    'ISO 9001 Quality Management',
    'Green Business Certified'
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
            About LuminaTech
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Illuminating businesses worldwide with innovative LED lighting solutions since 2008
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 with a simple mission: to help businesses reduce energy costs and 
                environmental impact through advanced LED lighting technology. What started as a 
                small team of lighting enthusiasts has grown into a nationwide leader in commercial 
                LED solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've completed more than 1,500 projects, transformed over 50 million 
                square feet of space, and helped our clients save over $25 million in energy costs. 
                Our commitment to innovation, quality, and customer service has made us the trusted 
                partner for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of what's possible with LED technology, 
                integrating smart controls, IoT connectivity, and sustainable practices to create 
                lighting solutions that don't just illuminate spaces—they transform them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office lighting"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth and success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    {item.year}
                  </div>
                  <div className="ml-8 bg-gray-50 p-6 rounded-xl flex-1">
                    <p className="text-gray-800">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts leading our mission to transform commercial lighting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Memberships</h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence is recognized by industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-blue-200 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-gray-900">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the 500+ businesses that trust LuminaTech for their LED lighting needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;