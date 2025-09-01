import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  strength: number;
}

const AdvancedParticleSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Initialize advanced particle system
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 120;
      const colors = [
        '#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B',
        '#EF4444', '#EC4899', '#6366F1', '#14B8A6', '#F97316'
      ];

      for (let i = 0; i < particleCount; i++) {
        const maxLife = 300 + Math.random() * 200;
        particlesRef.current.push({
          id: i,
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          z: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * maxLife,
          maxLife
        });
      }
    };

    initParticles();

    // Advanced animation loop with physics
    const animate = () => {
      timeRef.current += 0.016;
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw dynamic grid
      drawAdvancedGrid(ctx, canvasWidth, canvasHeight, timeRef.current);

      // Update particles with advanced physics
      particlesRef.current.forEach((particle, index) => {
        // Mouse attraction/repulsion
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouseRef.current.x, 2) + 
          Math.pow(particle.y - mouseRef.current.y, 2)
        );
        
        if (mouseDistance < 150) {
          const force = (150 - mouseDistance) / 150;
          const angle = Math.atan2(
            particle.y - mouseRef.current.y,
            particle.x - mouseRef.current.x
          );
          particle.vx += Math.cos(angle) * force * 0.02;
          particle.vy += Math.sin(angle) * force * 0.02;
        }

        // Wave motion
        particle.x += particle.vx + Math.sin(timeRef.current + index * 0.1) * 0.2;
        particle.y += particle.vy + Math.cos(timeRef.current + index * 0.1) * 0.2;
        particle.z += particle.vz;

        // Boundary wrapping with smooth transition
        if (particle.x < -10) particle.x = canvasWidth + 10;
        if (particle.x > canvasWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvasHeight + 10;
        if (particle.y > canvasHeight + 10) particle.y = -10;

        // Z-axis boundaries
        if (particle.z < 0 || particle.z > 100) particle.vz *= -1;

        // Life cycle
        particle.life += 1;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.opacity = Math.random() * 0.8 + 0.2;
        }

        // Dynamic opacity based on life and z-position
        const lifeRatio = 1 - Math.abs(particle.life - particle.maxLife / 2) / (particle.maxLife / 2);
        const zRatio = (particle.z + 50) / 150;
        const finalOpacity = particle.opacity * lifeRatio * zRatio;

        // Draw particle with advanced effects
        drawAdvancedParticle(ctx, particle, finalOpacity, timeRef.current);
      });

      // Draw advanced connections
      drawAdvancedConnections(ctx, particlesRef.current, timeRef.current);

      // Draw energy waves
      drawEnergyWaves(ctx, canvasWidth, canvasHeight, timeRef.current);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const drawAdvancedGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const gridSize = 80;
    const pulseIntensity = Math.sin(time * 2) * 0.3 + 0.7;
    
    ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * pulseIntensity})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 15]);

    // Animated grid lines
    for (let x = 0; x < width; x += gridSize) {
      const offset = Math.sin(time + x * 0.01) * 10;
      ctx.beginPath();
      ctx.moveTo(x + offset, 0);
      ctx.lineTo(x + offset, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      const offset = Math.cos(time + y * 0.01) * 10;
      ctx.beginPath();
      ctx.moveTo(0, y + offset);
      ctx.lineTo(width, y + offset);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  };

  const drawAdvancedParticle = (ctx: CanvasRenderingContext2D, particle: Particle, opacity: number, time: number) => {
    const size = particle.size * (1 + Math.sin(time + particle.id * 0.1) * 0.3);
    
    // Outer glow
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, size * 3
    );
    gradient.addColorStop(0, particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(0.3, particle.color + Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
    ctx.fill();

    // Core particle
    ctx.fillStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
    ctx.fill();

    // Inner highlight
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
    ctx.beginPath();
    ctx.arc(particle.x - size * 0.3, particle.y - size * 0.3, size * 0.3, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawAdvancedConnections = (ctx: CanvasRenderingContext2D, particles: Particle[], time: number) => {
    const maxDistance = 120;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dz = particles[i].z - particles[j].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz * 0.1);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.4;
          const pulseOpacity = opacity * (Math.sin(time * 3 + i * 0.1) * 0.3 + 0.7);
          
          // Create gradient line
          const gradient = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            particles[j].x, particles[j].y
          );
          gradient.addColorStop(0, particles[i].color + Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, particles[j].color + Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0'));

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    
    for (let i = 0; i < 3; i++) {
      const radius = (Math.sin(time * 0.5 + i * 2) * 0.5 + 0.5) * 300 + 100;
      const opacity = (Math.sin(time * 0.5 + i * 2) * 0.5 + 0.5) * 0.1;
      
      ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 20]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    ctx.setLineDash([]);
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AdvancedParticleSystem;