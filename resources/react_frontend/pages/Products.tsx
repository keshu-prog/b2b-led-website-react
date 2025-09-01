import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'office', name: 'Office Lighting' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'retail', name: 'Retail' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'specialty', name: 'Specialty' }
  ];

  const products = [
    {
      id: 1,
      name: 'LED Panel Pro 40W',
      category: 'office',
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      features: ['40W Power', '4000K Color Temperature', '120° Beam Angle', '50,000 Hour Lifespan'],
      description: 'Professional LED panel perfect for office environments. Provides uniform light distribution with excellent energy efficiency.',
      specs: {
        wattage: '40W',
        lumens: '4200 lm',
        efficiency: '105 lm/W',
        colorTemp: '4000K',
        cri: '>80',
        dimmable: 'Yes'
      }
    },
    {
      id: 2,
      name: 'Industrial High Bay 150W',
      category: 'industrial',
      price: '$299.99',
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      features: ['150W High Output', 'IP65 Rated', 'Motion Sensor Compatible', 'Heat Dissipation Design'],
      description: 'Heavy-duty industrial lighting solution for warehouses, factories, and large commercial spaces.',
      specs: {
        wattage: '150W',
        lumens: '19,500 lm',
        efficiency: '130 lm/W',
        colorTemp: '5000K',
        cri: '>70',
        dimmable: 'Optional'
      }
    },
    {
      id: 3,
      name: 'Retail Spotlight 25W',
      category: 'retail',
      price: '$129.99',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      features: ['Adjustable Beam', 'High CRI >90', 'Track Mount', 'Multiple Color Temps'],
      description: 'Perfect for highlighting products and creating attractive retail displays with superior color rendering.',
      specs: {
        wattage: '25W',
        lumens: '2,500 lm',
        efficiency: '100 lm/W',
        colorTemp: '3000K/4000K',
        cri: '>90',
        dimmable: 'Yes'
      }
    },
    {
      id: 4,
      name: 'Outdoor Floodlight 100W',
      category: 'outdoor',
      price: '$199.99',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      features: ['Weatherproof IP66', 'Motion Detection', 'Photocell Sensor', 'Adjustable Mount'],
      description: 'Durable outdoor lighting solution for security, landscaping, and architectural applications.',
      specs: {
        wattage: '100W',
        lumens: '13,000 lm',
        efficiency: '130 lm/W',
        colorTemp: '5000K',
        cri: '>70',
        dimmable: 'No'
      }
    },
    {
      id: 5,
      name: 'Smart LED Strip Controller',
      category: 'specialty',
      price: '$79.99',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      features: ['WiFi Enabled', 'RGB+W Control', 'Voice Compatible', 'Schedule Programming'],
      description: 'Advanced controller for LED strip installations with smart home integration and app control.',
      specs: {
        wattage: 'Up to 240W',
        lumens: 'Variable',
        efficiency: 'N/A',
        colorTemp: '2700K-6500K',
        cri: '>95',
        dimmable: 'Yes'
      }
    },
    {
      id: 6,
      name: 'Linear Suspended 60W',
      category: 'office',
      price: '$159.99',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      features: ['Seamless Connection', 'Anti-Glare Diffuser', 'Suspended Mount', 'Energy Star Rated'],
      description: 'Elegant linear lighting solution for modern offices and commercial spaces.',
      specs: {
        wattage: '60W',
        lumens: '6,600 lm',
        efficiency: '110 lm/W',
        colorTemp: '4000K',
        cri: '>80',
        dimmable: 'Yes'
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            LED Products Catalog
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive range of professional LED lighting solutions
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {product.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                  <div className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="text-sm text-gray-500">• {feature}</div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-blue-600">{selectedProduct.price}</div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg text-gray-600 ml-1">{selectedProduct.rating}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Product Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProduct.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-200 pb-2">
                        <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        <div className="font-medium">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                      Request Quote
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200">
                      Download Spec Sheet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Products;