import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams();

  // Sample blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Smart LED Lighting: IoT Integration and Beyond',
      excerpt: 'Explore how Internet of Things technology is revolutionizing commercial lighting systems with intelligent controls and predictive maintenance.',
      author: 'Sarah Chen',
      date: '2024-03-15',
      readTime: '8 min',
      category: 'technology',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Smart Lighting', 'IoT', 'Technology', 'Innovation'],
      content: `
        <p>Smart LED lighting systems are transforming how businesses manage their lighting infrastructure. With the integration of Internet of Things (IoT) technology, lighting has evolved from a simple on/off function to an intelligent network that can adapt, learn, and optimize itself.</p>

        <h2>The Evolution of Smart Lighting</h2>
        <p>Traditional lighting systems were static, requiring manual control and offering limited functionality. Today's smart LED systems incorporate sensors, wireless connectivity, and advanced algorithms to create responsive lighting environments that enhance productivity, reduce energy consumption, and improve user comfort.</p>

        <h2>Key IoT Integration Benefits</h2>
        <ul>
          <li><strong>Predictive Maintenance:</strong> IoT sensors monitor LED performance and predict when maintenance is needed, reducing unexpected failures and extending fixture lifespan.</li>
          <li><strong>Occupancy-Based Control:</strong> Motion and occupancy sensors automatically adjust lighting based on space usage, ensuring lights are only on when needed.</li>
          <li><strong>Daylight Harvesting:</strong> Light sensors measure natural light levels and automatically dim artificial lighting to maintain optimal illumination while minimizing energy use.</li>
          <li><strong>Remote Management:</strong> Cloud-based platforms allow facility managers to monitor and control lighting systems from anywhere, providing real-time insights and control.</li>
        </ul>

        <h2>Real-World Applications</h2>
        <p>We've implemented smart LED systems in various environments:</p>
        
        <h3>Corporate Offices</h3>
        <p>A Fortune 500 company reduced their lighting energy consumption by 68% after implementing our smart LED system with occupancy sensors and daylight harvesting. The system learned usage patterns and automatically adjusted lighting schedules, resulting in $180,000 annual savings.</p>

        <h3>Retail Environments</h3>
        <p>Smart LED systems in retail spaces can adjust color temperature and intensity based on the time of day, product displays, and customer traffic patterns. This creates an optimal shopping environment while reducing energy costs by up to 45%.</p>

        <h3>Industrial Facilities</h3>
        <p>Manufacturing facilities benefit from smart LED systems that provide consistent, high-quality lighting while monitoring environmental conditions. Predictive maintenance features have reduced lighting-related downtime by 90% in our client facilities.</p>

        <h2>The Technology Behind Smart LEDs</h2>
        <p>Modern smart LED systems incorporate several key technologies:</p>

        <h3>Wireless Mesh Networks</h3>
        <p>LED fixtures communicate with each other through wireless mesh networks, creating a self-healing network that continues to function even if individual nodes fail. This ensures reliable operation and easy scalability.</p>

        <h3>Advanced Sensors</h3>
        <p>Multiple sensor types work together to create intelligent lighting responses:</p>
        <ul>
          <li>Occupancy sensors detect movement and presence</li>
          <li>Ambient light sensors measure natural light levels</li>
          <li>Temperature sensors monitor environmental conditions</li>
          <li>Air quality sensors can trigger ventilation responses</li>
        </ul>

        <h3>Machine Learning Algorithms</h3>
        <p>Smart LED systems learn from usage patterns and environmental data to optimize performance automatically. These algorithms can predict occupancy patterns, adjust for seasonal changes, and identify opportunities for additional energy savings.</p>

        <h2>Future Developments</h2>
        <p>The future of smart LED lighting includes even more advanced features:</p>

        <h3>Li-Fi Technology</h3>
        <p>LED fixtures will soon provide high-speed internet connectivity through light waves, creating a dual-purpose infrastructure that provides both illumination and data transmission.</p>

        <h3>Health and Wellness Integration</h3>
        <p>Circadian rhythm lighting will become standard, automatically adjusting color temperature throughout the day to support human health and productivity. Integration with wearable devices will allow personalized lighting preferences.</p>

        <h3>AI-Powered Optimization</h3>
        <p>Artificial intelligence will enable lighting systems to make complex decisions based on multiple data sources, including weather forecasts, building schedules, and energy pricing to optimize both comfort and cost.</p>

        <h2>Implementation Considerations</h2>
        <p>When planning a smart LED installation, consider these factors:</p>

        <h3>Network Infrastructure</h3>
        <p>Ensure your facility has adequate network infrastructure to support IoT devices. This may require upgrading Wi-Fi networks or installing dedicated lighting networks.</p>

        <h3>Integration with Building Systems</h3>
        <p>Smart lighting works best when integrated with other building systems like HVAC, security, and fire safety. Plan for these integrations during the design phase.</p>

        <h3>Staff Training</h3>
        <p>Provide comprehensive training for facility staff on the new system's capabilities and management interfaces. This ensures you get maximum value from your investment.</p>

        <h2>ROI and Business Benefits</h2>
        <p>Smart LED systems typically provide:</p>
        <ul>
          <li>60-80% reduction in lighting energy consumption</li>
          <li>50-90% reduction in maintenance costs</li>
          <li>Improved employee productivity and satisfaction</li>
          <li>Enhanced security through integrated monitoring</li>
          <li>Detailed energy usage analytics for better decision-making</li>
        </ul>

        <h2>Getting Started</h2>
        <p>The transition to smart LED lighting doesn't have to happen all at once. We recommend a phased approach:</p>
        <ol>
          <li><strong>Assessment:</strong> Evaluate your current lighting and identify priority areas</li>
          <li><strong>Pilot Project:</strong> Start with a small area to demonstrate benefits</li>
          <li><strong>Gradual Expansion:</strong> Roll out the system building by building or floor by floor</li>
          <li><strong>Full Integration:</strong> Connect all systems for maximum efficiency</li>
        </ol>

        <p>Smart LED lighting represents the future of commercial illumination. By embracing IoT integration, businesses can create more efficient, comfortable, and intelligent lighting environments while significantly reducing operational costs.</p>

        <p>Ready to explore smart LED solutions for your facility? Contact our team for a comprehensive assessment and customized proposal.</p>
      `
    },
    {
      id: '2',
      title: 'LED vs. Traditional Lighting: A Complete ROI Analysis',
      excerpt: 'Comprehensive breakdown of costs, energy savings, and return on investment when switching to LED lighting systems.',
      author: 'Michael Rodriguez',
      date: '2024-03-10',
      readTime: '6 min',
      category: 'tips',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ROI', 'Cost Analysis', 'LED Benefits', 'Business'],
      content: `
        <p>When evaluating lighting upgrades, understanding the total return on investment is crucial for making informed business decisions. This comprehensive analysis breaks down the real costs and benefits of switching to LED lighting systems.</p>

        <h2>Initial Investment Comparison</h2>
        <p>While LED fixtures have higher upfront costs, the total cost of ownership tells a different story:</p>

        <h3>Equipment Costs</h3>
        <ul>
          <li><strong>Fluorescent:</strong> $15-25 per fixture</li>
          <li><strong>LED:</strong> $50-150 per fixture</li>
          <li><strong>Premium LED:</strong> $100-300 per fixture</li>
        </ul>

        <h3>Installation Costs</h3>
        <p>LED installations often require less labor due to:</p>
        <ul>
          <li>Fewer fixtures needed for same light output</li>
          <li>No ballast requirements</li>
          <li>Simplified wiring in many cases</li>
        </ul>

        <h2>Operating Cost Analysis</h2>
        <p>The real savings come from reduced operating expenses:</p>

        <h3>Energy Consumption</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Lighting Type</th>
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Watts per Fixture</th>
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Annual kWh (10 hrs/day)</th>
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Annual Cost (@$0.12/kWh)</th>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Incandescent (60W equivalent)</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">60W</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">219</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">$26.28</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Fluorescent T8</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">32W</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">117</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">$14.04</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;">LED</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">9W</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">33</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">$3.96</td>
          </tr>
        </table>

        <h3>Maintenance Costs</h3>
        <p>LED fixtures dramatically reduce maintenance expenses:</p>
        <ul>
          <li><strong>Incandescent:</strong> 1,000-hour lifespan, frequent replacements</li>
          <li><strong>Fluorescent:</strong> 10,000-hour lifespan, ballast replacements</li>
          <li><strong>LED:</strong> 50,000+ hour lifespan, minimal maintenance</li>
        </ul>

        <h2>Real-World Case Study</h2>
        <p>Let's examine a typical office building retrofit:</p>

        <h3>Project Details</h3>
        <ul>
          <li>50,000 sq ft office building</li>
          <li>500 existing fluorescent fixtures</li>
          <li>12 hours daily operation</li>
          <li>$0.12 per kWh electricity rate</li>
        </ul>

        <h3>Before LED Upgrade</h3>
        <ul>
          <li>Annual energy consumption: 70,080 kWh</li>
          <li>Annual energy cost: $8,410</li>
          <li>Annual maintenance cost: $3,500</li>
          <li>Total annual operating cost: $11,910</li>
        </ul>

        <h3>After LED Upgrade</h3>
        <ul>
          <li>LED fixtures installed: 350 (30% fewer needed)</li>
          <li>Annual energy consumption: 18,396 kWh</li>
          <li>Annual energy cost: $2,208</li>
          <li>Annual maintenance cost: $200</li>
          <li>Total annual operating cost: $2,408</li>
        </ul>

        <h3>Results</h3>
        <ul>
          <li><strong>Annual savings:</strong> $9,502</li>
          <li><strong>Energy reduction:</strong> 74%</li>
          <li><strong>Project cost:</strong> $45,000</li>
          <li><strong>Payback period:</strong> 4.7 years</li>
          <li><strong>10-year net savings:</strong> $50,020</li>
        </ul>

        <h2>Additional Benefits</h2>
        <p>Beyond direct cost savings, LED upgrades provide:</p>

        <h3>Improved Light Quality</h3>
        <ul>
          <li>Better color rendering (CRI 80-95+)</li>
          <li>Instant on/off capability</li>
          <li>Consistent light output over lifespan</li>
          <li>Reduced glare and eye strain</li>
        </ul>

        <h3>Environmental Impact</h3>
        <ul>
          <li>Reduced carbon footprint</li>
          <li>No mercury content</li>
          <li>Recyclable components</li>
          <li>LEED certification points</li>
        </ul>

        <h3>Productivity Benefits</h3>
        <p>Studies show that better lighting can:</p>
        <ul>
          <li>Increase productivity by 6-16%</li>
          <li>Reduce eye strain and headaches</li>
          <li>Improve employee satisfaction</li>
          <li>Decrease absenteeism</li>
        </ul>

        <h2>Financing Options</h2>
        <p>Several financing options can help with upfront costs:</p>

        <h3>Utility Rebates</h3>
        <p>Many utilities offer rebates of $10-50 per fixture for LED upgrades. These can reduce project costs by 20-40%.</p>

        <h3>Energy Service Company (ESCO) Financing</h3>
        <p>ESCOs can finance the entire project with payments from energy savings, requiring no upfront capital.</p>

        <h3>Equipment Leasing</h3>
        <p>Leasing options spread costs over 3-7 years, often with payments lower than energy savings.</p>

        <h2>Maximizing ROI</h2>
        <p>To get the best return on your LED investment:</p>

        <h3>Right-Size Your System</h3>
        <p>Conduct a proper lighting audit to avoid over-lighting and ensure optimal fixture placement.</p>

        <h3>Add Smart Controls</h3>
        <p>Occupancy sensors and daylight harvesting can increase savings by an additional 20-30%.</p>

        <h3>Consider Maintenance Savings</h3>
        <p>Factor in reduced labor costs for maintenance and the value of avoiding disruptions.</p>

        <h3>Plan for Rebates</h3>
        <p>Research available utility rebates and tax incentives before starting your project.</p>

        <h2>Common ROI Mistakes</h2>
        <p>Avoid these common errors in ROI calculations:</p>

        <ul>
          <li>Ignoring maintenance cost savings</li>
          <li>Not accounting for productivity improvements</li>
          <li>Overlooking utility rebates and incentives</li>
          <li>Using outdated electricity rates</li>
          <li>Failing to consider smart control benefits</li>
        </ul>

        <h2>Conclusion</h2>
        <p>LED lighting upgrades typically provide excellent ROI through:</p>
        <ul>
          <li>60-80% energy savings</li>
          <li>90% reduction in maintenance costs</li>
          <li>3-6 year payback periods</li>
          <li>Improved workplace quality</li>
          <li>Environmental benefits</li>
        </ul>

        <p>The key is conducting a thorough analysis that considers all costs and benefits, not just the initial equipment price. With proper planning and implementation, LED upgrades are one of the most cost-effective improvements a business can make.</p>

        <p>Ready to calculate your specific ROI? Use our LED calculator or contact us for a detailed analysis of your facility.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id && p.category === post.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                {post.category.replace('-', ' ')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-blue-100">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                      lineHeight: '1.7',
                      color: '#374151'
                    }}
                  />

                  {/* Share Buttons */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-600 font-medium">Share this article:</span>
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Info */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-500">LED Lighting Expert</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Experienced professional in LED lighting technology with expertise in energy efficiency and smart lighting solutions.
                </p>
              </motion.div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div className="text-xs text-gray-500 mt-1 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(relatedPost.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-semibold">Need Expert Advice?</h3>
                </div>
                <p className="text-blue-100 mb-4 text-sm">
                  Get personalized LED lighting recommendations for your business.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-white text-blue-600 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-200"
                >
                  Contact Our Experts
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;