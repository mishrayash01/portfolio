import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Navigation from '@/react-app/components/Navigation';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  // Parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const textX = useTransform(springX, [-1, 1], [-40, 40]);
  const textY = useTransform(springY, [-1, 1], [-40, 40]);
  
  const gridX = useTransform(springX, [-1, 1], [-15, 15]);
  const gridY = useTransform(springY, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: '#050505',
        fontFamily: "'Inter', sans-serif",
      }}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Mood Radial Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, #1E293B 0%, transparent 60%)`,
        }}
      />

      <div className="relative w-full h-[100vh] overflow-hidden">
        <Navigation />
        
        {/* Animated Background Grid */}
        <motion.div 
          style={{ x: gridX, y: gridY }}
          className="absolute inset-[-5%] w-[110%] h-[110%] pointer-events-none z-0 opacity-20"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: 'center center'
          }} />
          {/* Vignette mask for the grid */}
          <div className="absolute inset-0 bg-radial-vignette" style={{ background: 'radial-gradient(circle, transparent 20%, #050505 80%)' }} />
        </motion.div>

        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
          style={{ 
            opacity: 0.4,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Brand label */}
        <div className="absolute top-8 left-6 sm:left-10 z-[60] text-xs font-semibold uppercase text-white/80 tracking-[0.25em]">
          YASH MISHRA
        </div>

        {/* Interactive Parallax Ghost Text */}
        <motion.div
          style={{ x: textX, y: textY, top: '15%' }}
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
        >
          <h1
            className="uppercase m-0 p-0 text-transparent"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(100px, 28vw, 400px)',
              fontWeight: 900,
              opacity: 1,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              whiteSpace: 'nowrap',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)',
            }}
          >
            YASH*
          </h1>
        </motion.div>

        {/* Sophisticated Editorial Glass Panel */}
        <div className="absolute bottom-6 left-4 sm:bottom-12 sm:left-12 z-[60] w-[calc(100%-32px)] sm:w-[420px]">
          <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle glow inside the panel */}
            <div 
              className="absolute -inset-10 opacity-20 blur-3xl z-0 pointer-events-none" 
              style={{ backgroundColor: '#1E293B' }}
            />
            
            <div className="relative z-10">
              <p className="font-bold uppercase tracking-[0.2em] mb-4 text-[11px] sm:text-[13px] text-white/70" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Product & Engineering
              </p>
              <p className="text-[14px] sm:text-[16px] text-white opacity-85 leading-[1.7] font-light">
                Engineering ideas from 0 to 1. Combining modern web tech, AI automation, and product strategy to build and scale high-performance software ecosystems.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
