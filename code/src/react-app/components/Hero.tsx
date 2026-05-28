import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 1. The Cinematic Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 2. Dark Gradient Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/10 to-black/80" />

      {/* 3. The Content (Framer Motion Animations) */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="font-black uppercase tracking-tighter text-transparent"
          style={{
            fontSize: "clamp(60px, 14vw, 250px)",
            lineHeight: 0.9,
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)",
          }}
        >
          YASH<br />MISHRA
        </motion.h1>

        {/* 4. Glassmorphism Sound Toggle Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={toggleMute}
          className="mt-12 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 shadow-2xl"
        >
          {isMuted ? "🔇 Tap to Listen" : "🔊 Sound On"}
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
