import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Zap, Award, DollarSign, Users, Clock } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  gradient: string;
  description: string;
}

const InteractiveStats: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const stats: StatItem[] = [
    {
      id: 'energy',
      icon: <Zap className="h-8 w-8" />,
      value: '80%',
      label: 'Energy Reduction',
      color: 'text-green-400',
      gradient: 'from-green-500/20 to-emerald-600/20 border-green-400/30',
      description: 'Average energy cost reduction across all installations'
    },
    {
      id: 'savings',
      icon: <DollarSign className="h-8 w-8" />,
      value: '$25M+',
      label: 'Client Savings',
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-blue-600/20 border-blue-400/30',
      description: 'Total savings generated for our clients worldwide'
    },
    {
      id: 'projects',
      icon: <Award className="h-8 w-8" />,
      value: '1,500+',
      label: 'Projects Completed',
      color: 'text-purple-400',
      gradient: 'from-purple-500/20 to-purple-600/20 border-purple-400/30',
      description: 'Successfully completed LED installations'
    },
    {
      id: 'roi',
      icon: <TrendingUp className="h-8 w-8" />,
      value: '3-5 Yrs',
      label: 'ROI Payback',
      color: 'text-cyan-400',
      gradient: 'from-cyan-500/20 to-cyan-600/20 border-cyan-400/30',
      description: 'Typical return on investment timeframe'
    },
    {
      id: 'clients',
      icon: <Users className="h-8 w-8" />,
      value: '500+',
      label: 'Happy Clients',
      color: 'text-orange-400',
      gradient: 'from-orange-500/20 to-orange-600/20 border-orange-400/30',
      description: 'Businesses trusting our LED solutions'
    },
    {
      id: 'lifespan',
      icon: <Clock className="h-8 w-8" />,
      value: '50K+ Hrs',
      label: 'LED Lifespan',
      color: 'text-pink-400',
      gradient: 'from-pink-500/20 to-pink-600/20 border-pink-400/30',
      description: 'Average operational hours of our LED systems'
    }
  ];

  useEffect(() => {
    // Animate numbers on mount
    const targets = {
      energy: 80,
      savings: 25,
      projects: 1500,
      roi: 4,
      clients: 500,
      lifespan: 50000
    };

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target / 60; // 60 frames for 1 second animation
      
      const animate = () => {
        current += increment;
        if (current >= target) {
          current = target;
        }
        
        setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(current) }));
        
        if (current < target) {
          requestAnimationFrame(animate);
        }
      };
      
      setTimeout(() => animate(), Math.random() * 500);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          className={`relative bg-gradient-to-br ${stat.gradient} backdrop-blur-lg rounded-2xl p-6 border cursor-pointer overflow-hidden group`}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 50
          }}
          onHoverStart={() => setActiveCard(stat.id)}
          onHoverEnd={() => setActiveCard(null)}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
               style={{ 
                 background: `conic-gradient(from 0deg, transparent, ${stat.color.replace('text-', '').replace('-400', '')}, transparent)`,
                 padding: '1px',
                 mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 maskComposite: 'exclude'
               }} />
          
          <div className="relative z-10">
            <div className={`${stat.color} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>
            
            <div className="space-y-1">
              <motion.div 
                className={`text-3xl font-bold ${stat.color}`}
                animate={activeCard === stat.id ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {stat.id === 'energy' && `${animatedValues.energy || 0}%`}
                {stat.id === 'savings' && `$${animatedValues.savings || 0}M+`}
                {stat.id === 'projects' && `${animatedValues.projects || 0}+`}
                {stat.id === 'roi' && `${animatedValues.roi || 0}-5 Yrs`}
                {stat.id === 'clients' && `${animatedValues.clients || 0}+`}
                {stat.id === 'lifespan' && `${Math.floor((animatedValues.lifespan || 0) / 1000)}K+ Hrs`}
              </motion.div>
              
              <div className="text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {activeCard === stat.id && (
              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-white/20 whitespace-nowrap z-20"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {stat.description}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Particle effect on hover */}
          <AnimatePresence>
            {activeCard === stat.id && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 ${stat.color.replace('text-', 'bg-')} rounded-full`}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -20, -40],
                      x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40]
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveStats;