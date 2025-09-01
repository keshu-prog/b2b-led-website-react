import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ArrowRight, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'office', name: 'Office' },
    { id: 'retail', name: 'Retail' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Tech Corporate Headquarters',
      category: 'office',
      location: 'San Francisco, CA',
      completedDate: 'March 2024',
      teamSize: '50,000 sq ft',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete LED retrofit of a 15-story corporate headquarters, featuring smart lighting controls and circadian rhythm support.',
      challenge: 'The client needed to reduce energy costs by 60% while improving employee productivity and comfort in their aging office building.',
      solution: 'Installed 2,500+ LED fixtures with smart controls, occupancy sensors, and tunable white technology throughout all floors.',
      results: [
        '68% reduction in lighting energy consumption',
        '15% increase in employee satisfaction scores',
        '$180,000 annual energy savings',
        'LEED Platinum certification achieved'
      ],
      technologies: ['Smart LED Panels', 'Occupancy Sensors', 'Daylight Harvesting', 'Circadian Lighting'],
      testimonial: {
        text: "The transformation has been incredible. Our employees are more productive and our energy bills have dropped dramatically.",
        author: "Sarah Johnson, Facilities Manager"
      }
    },
    {
      id: 2,
      title: 'Premium Fashion Retail Chain',
      category: 'retail',
      location: 'New York, NY',
      completedDate: 'January 2024',
      teamSize: '25 locations',
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'LED lighting upgrade across 25 retail locations to enhance product presentation and customer experience.',
      challenge: 'Poor color rendering was affecting product appearance and customer satisfaction across all store locations.',
      solution: 'Implemented high-CRI LED track lighting with accent spots and dynamic color temperature control for different product areas.',
      results: [
        '22% increase in average transaction value',
        '95+ CRI achieved throughout stores',
        '45% reduction in lighting maintenance',
        'Improved brand consistency across locations'
      ],
      technologies: ['High-CRI Track Lighting', 'Accent Spotlights', 'Color Temperature Control', 'Wireless Controls'],
      testimonial: {
        text: "Our products have never looked better. Customers consistently comment on how vibrant everything appears.",
        author: "Michael Chen, Store Operations Director"
      }
    },
    {
      id: 3,
      title: 'Manufacturing Facility Upgrade',
      category: 'industrial',
      location: 'Detroit, MI',
      completedDate: 'November 2023',
      // completedDate: 'November 2023',
      teamSize: '200,000 sq ft',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-bay LED installation in automotive parts manufacturing facility with smart controls and emergency backup.',
      challenge: 'Frequent lighting failures and high maintenance costs were impacting production efficiency and worker safety.',
      solution: 'Replaced 800+ metal halide fixtures with LED high-bays featuring motion sensors and emergency backup systems.',
      results: [
        '75% reduction in lighting energy usage',
        '90% decrease in maintenance requirements',
        'Zero lighting-related production delays',
        'Improved workplace safety scores'
      ],
      technologies: ['Industrial LED High-Bays', 'Motion Sensors', 'Emergency Backup', 'Wireless Monitoring'],
      testimonial: {
        text: "The reliability has been outstanding. We haven't had a single lighting failure in over 8 months.",
        author: "Robert Davis, Plant Manager"
      }
    },
    {
      id: 4,
      title: 'Regional Medical Center',
      category: 'healthcare',
      location: 'Phoenix, AZ',
      completedDate: 'September 2023',
      teamSize: '500 beds',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive LED lighting solution for patient rooms, corridors, and surgical suites with infection control features.',
      challenge: 'Needed lighting that supports patient healing while meeting strict healthcare regulations and infection control requirements.',
      solution: 'Installed antimicrobial LED fixtures with circadian support in patient areas and high-performance surgical lighting.',
      results: [
        '12% faster patient recovery times',
        '100% compliance with healthcare lighting standards',
        '55% reduction in lighting energy costs',
        'Improved staff satisfaction and alertness'
      ],
      technologies: ['Antimicrobial LED Fixtures', 'Circadian Lighting', 'Surgical LED Systems', 'Emergency Lighting'],
      testimonial: {
        text: "The lighting has created a more healing environment for our patients and a better working environment for our staff.",
        author: "Dr. Maria Rodriguez, Chief Medical Officer"
      }
    },
    {
      id: 5,
      title: 'University Campus Modernization',
      category: 'education',
      location: 'Austin, TX',
      completedDate: 'August 2023',
      teamSize: '12 buildings',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Campus-wide LED retrofit including classrooms, libraries, dormitories, and outdoor areas with smart controls.',
      challenge: 'Aging fluorescent lighting was creating poor learning environments and consuming excessive energy across campus.',
      solution: 'Phased LED installation across 12 buildings with smart controls, occupancy sensors, and outdoor pathway lighting.',
      results: [
        '62% reduction in campus lighting energy use',
        'Improved student focus and learning outcomes',
        '$95,000 annual utility savings',
        'Enhanced campus safety and security'
      ],
      technologies: ['Classroom LED Panels', 'Library Task Lighting', 'Outdoor LED Pathways', 'Campus-wide Controls'],
      testimonial: {
        text: "Students and faculty have noticed the difference immediately. The campus feels more modern and welcoming.",
        author: "James Wilson, Facilities Director"
      }
    },
    {
      id: 6,
      title: 'Luxury Hotel Chain',
      category: 'retail',
      location: 'Las Vegas, NV',
      completedDate: 'June 2023',
      teamSize: '300 rooms',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant LED lighting design for luxury hotel including guest rooms, restaurants, and event spaces.',
      challenge: 'Creating sophisticated ambiance while reducing operational costs and minimizing maintenance disruptions for guests.',
      solution: 'Custom LED fixtures with dimming controls, color-changing capabilities, and centralized management system.',
      results: [
        '40% reduction in lighting energy consumption',
        '85% decrease in lighting maintenance calls',
        'Enhanced guest satisfaction scores',
        'Increased event bookings due to lighting flexibility'
      ],
      technologies: ['Dimmable LED Fixtures', 'Color-Changing Systems', 'Centralized Controls', 'Hospitality Lighting'],
      testimonial: {
        text: "The lighting creates the perfect atmosphere for our guests while significantly reducing our operational costs.",
        author: "Amanda Foster, General Manager"
      }
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

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
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Successful LED lighting projects that have transformed businesses across industries
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600">1,500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-600">50M+</div>
              <div className="text-gray-600">Sq Ft Transformed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-600">$25M+</div>
              <div className="text-gray-600">Energy Savings</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium capitalize">{project.category}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.completedDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {project.teamSize}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{selectedProject.location}</span>
                    <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{selectedProject.completedDate}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.challenge}</p>

                  <h3 className="text-xl font-semibold mb-4">Solution</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Results Achieved</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.results.map((result: string, i: number) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech: string, i: number) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                    <p className="text-gray-600 italic mb-4">"{selectedProject.testimonial.text}"</p>
                    <p className="text-gray-900 font-medium">— {selectedProject.testimonial.author}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Start Your Project
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;