import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Zap, Shield, Award, Users, TrendingUp, Calculator } from 'lucide-react';
import ParticleSystem from '../components/ParticleSystem';
import LEDDemo from '../components/LEDDemo';
import HeroBanner from '../components/HeroBanner/HeroBanner';

const Home: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Energy Efficient',
      description: 'Save up to 80% on energy costs with our advanced LED technology'
    },
    {
      icon: Zap,
      title: 'Long Lasting',
      description: 'Over 50,000 hours of reliable operation with minimal maintenance'
    },
    {
      icon: Shield,
      title: 'Eco Friendly',
      description: 'Reduce carbon footprint with sustainable lighting solutions'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '1,500+' },
    { label: 'Energy Saved (MWh)', value: '2.3M' },
    { label: 'Happy Clients', value: '500+' },
    { label: 'Years Experience', value: '15+' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Industries',
      text: 'LuminaTech transformed our office lighting, reducing our energy costs by 70% while creating a more productive work environment.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Retail Solutions Inc',
      text: 'The LED installation exceeded our expectations. Our customers love the new ambiance and our electricity bills have never been lower.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}

      <div className="min-h-screen pt-20">
        <HeroBanner />
      </div>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our LED Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets professional service to deliver lighting solutions 
              that transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LED Demo Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LEDDemo />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-xl">★</div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Lighting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and discover how much you can save with LED lighting
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;