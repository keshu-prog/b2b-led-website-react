import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import AdvancedParticleSystem from './AdvancedParticleSystem';
import InteractiveStats from './InteractiveStats';

const HeroBanner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Modern Office Lighting",
      subtitle: "Productivity Enhancement"
    },
    {
      url: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Retail LED Solutions",
      subtitle: "Customer Experience"
    },
    {
      url: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Industrial Lighting",
      subtitle: "Safety & Efficiency"
    },
    {
      url: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Smart Office Systems",
      subtitle: "Intelligent Control"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <AdvancedParticleSystem />
      
      

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content - Minimal Impactful Text */}
            <div className="lg:col-span-7 xl:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Animated Badge */}
                <motion.div
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-400/30"
                  whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.6)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-blue-200 font-semibold">Revolutionary LED Technology</span>
                </motion.div>

                {/* Main Headline - Ultra Minimal */}
                <motion.h1
                  className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.span 
                    className="block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    LIGHT
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    THE
                  </motion.span>
                  <motion.span 
                    className="block text-6xl md:text-7xl text-gray-300 font-light"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    FUTURE
                  </motion.span>
                </motion.h1>

                {/* Minimal Subtext */}
                <motion.p
                  className="text-3xl text-gray-300 font-light max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Transform spaces. Save energy. 
                  <span className="text-green-400 font-semibold"> Reduce costs by 80%.</span>
                </motion.p>

                {/* Advanced CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Interactive Stats */}
            <div className="lg:col-span-5 xl:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="relative"
              >
                <InteractiveStats />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      

     

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${
                ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][i % 4]
              }60 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;