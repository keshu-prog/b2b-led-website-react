import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Mail, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  const categories = ['All', 'Technology', 'Energy Efficiency', 'Design', 'Industry News', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of LED Technology: What to Expect in 2024',
      excerpt: 'Discover the latest innovations in LED lighting technology and how they will transform commercial spaces.',
      category: 'Technology',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Energy Savings Calculator: How Much Can Your Business Save?',
      excerpt: 'Learn how to calculate potential energy savings when switching to LED lighting systems.',
      category: 'Energy Efficiency',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Smart Lighting Controls: Maximizing Efficiency and Comfort',
      excerpt: 'Explore how smart lighting controls can enhance workplace productivity and reduce energy costs.',
      category: 'Technology',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Retail Lighting Design: Creating the Perfect Shopping Experience',
      excerpt: 'Discover how proper lighting design can increase sales and improve customer experience in retail spaces.',
      category: 'Design',
      author: 'David Park',
      date: '2024-01-08',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Case Study: Office Building Reduces Energy Costs by 60%',
      excerpt: 'See how a major office complex achieved significant energy savings with our LED retrofit solution.',
      category: 'Case Studies',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'LED Maintenance: Best Practices for Long-Term Performance',
      excerpt: 'Learn essential maintenance tips to ensure your LED lighting systems perform optimally for years.',
      category: 'Industry News',
      author: 'Robert Kim',
      date: '2024-01-03',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LED Lighting Insights & News
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and best practices in LED lighting
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'All' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{featuredPost.author}</span>
                        </div>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get the latest LED lighting insights delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Popular Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;