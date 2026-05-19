import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/react-app/components/Navigation';

const EXPERIENCES = [
  {
    id: 1,
    role: "Solo Founder (Bootstrapped)",
    company: "GroVize (In Development)",
    date: "Phase 1",
    focus: "Market Research & Problem Discovery",
    impact: "Identified severe inventory and billing inefficiencies in India's retail market. Interviewed 30+ local Kirana store owners to validate the core problem before writing any code.",
    stack: ["User Research", "B2B Strategy", "Problem Validation"],
  },
  {
    id: 2,
    role: "Product Builder (B2B)",
    company: "GroVize Merchant MVP",
    date: "Phase 2",
    focus: "Rapid Prototyping & B2B Operations",
    impact: "Architected a desktop-web application enabling shopkeepers to manage inventory and process digital billing, serving as the operational hub for retailers.",
    stack: ["TypeScript (94.2%)", "JavaScript (4.0%)", "Swift (0.6%)", "CSS/Java/Ruby"],
  },
  {
    id: 3,
    role: "Product Architect (B2C)",
    company: "GroVize Mart",
    date: "Phase 3",
    focus: "Hyperlocal Marketplace Flow",
    impact: "Engineered the customer-facing interface allowing users to order directly from local retailers, focusing on a highly interactive, seamless, and animated user experience.",
    stack: ["TypeScript (96.0%)", "JavaScript (2.0%)", "CSS (1.5%)", "React 19", "Framer Motion", "Firebase"],
  },
  {
    id: 4,
    role: "AI Frontend Developer",
    company: "GroVize Official Website",
    date: "Phase 4",
    focus: "Landing Page & Lead Generation",
    impact: "Engineered the official GroVize landing page to showcase the product vision to potential investors and beta testers. Leveraged AI coding assistants to accelerate development and craft a cinematic, high-conversion user interface.",
    stack: ["TypeScript (94.7%)", "HTML (3.0%)", "JavaScript (1.8%)", "React (Vite)", "Tailwind CSS"],
  },
  {
    id: 5,
    role: "Product Lead",
    company: "GroVize Ecosystem",
    date: "Phase 5",
    focus: "Product Strategy & Go-To-Market",
    impact: "Conceptualized the dual-platform SaaS + Marketplace ecosystem for India's $800B retail sector. Operating on a bootstrapped budget and currently in pre-launch with zero active users. Executing a targeted GTM strategy focused on high-rise buildings in Delhi NCR to drive viral pilot adoption.",
    stack: ["Product Strategy", "B2B Sales", "GTM Execution", "Resource Management"],
  },
  {
    id: 6,
    role: "Athlete & Competitor",
    company: "Sports Leadership & Resilience",
    date: "Phase 6",
    focus: "High-Pressure Execution & Team Dynamics",
    impact: [
      "**Cricket Excellence:** Won Gold at the KITE Inter-College Tournament (Raan'26).",
      "**Tournament Dominance:** Secured 'Player of the Tournament' & 'Best Bowler' at the AKGEC Fit-India Tournament (2025), alongside 3x 'Man of the Match' titles (Inter-School, 2023).",
      "**Extensive Experience:** Played 100+ local cricket tournaments (2022-2024), honing strategic execution.",
      "**Martial Arts:** State-Level Taekwondo Athlete representing Lucknow (Dan 1 Belt), demonstrating extreme discipline.",
      "**Active Sports:** Highly competitive across Cricket, Football, and Badminton."
    ],
    stack: ["Strategic Execution", "Team Leadership", "Discipline", "Resilience"],
  },
];

const ExperienceCard = ({ exp, index, isMobile }: { exp: any; index: number; isMobile: boolean }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, x: isMobile ? 0 : (isLeft ? -40 : 40) }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full sm:w-1/2 z-10 ${isMobile
        ? 'mb-16'
        : `${isLeft ? 'self-start pr-12' : 'self-end pl-12'} ${index > 0 ? '-mt-24' : ''}`
        }`}
    >
      {/* Desktop connector */}
      {!isMobile && (
        <div className={`absolute top-16 h-[2px] bg-gradient-to-r ${isLeft
          ? 'from-transparent to-cyan-500/60 right-0 w-12'
          : 'from-cyan-500/60 to-transparent left-0 w-12'
          } z-0`}>
          <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] ${isLeft ? 'right-[-6px]' : 'left-[-6px]'
            }`} />
        </div>
      )}

      {/* Mobile connector */}
      {isMobile && (
        <div className="absolute top-16 left-[-32px] w-8 h-[2px] bg-gradient-to-r from-cyan-500/60 to-transparent z-0">
          <div className="absolute top-1/2 -translate-y-1/2 left-[-6px] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
        </div>
      )}

      <motion.div
        whileHover={{ y: -8 }}
        className="group relative bg-[#101010]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)] hover:border-white/20"
      >
        {/* Subtle internal glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {exp.role}
              </h3>
              <p className="text-cyan-400 font-medium tracking-wide mt-1 text-sm sm:text-base uppercase">
                @ {exp.company}
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 tracking-wider uppercase backdrop-blur-md whitespace-nowrap">
              {exp.date}
            </div>
          </div>

          <div className="inline-block px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6">
            {exp.focus}
          </div>

          {Array.isArray(exp.impact) ? (
            <ul className="list-disc ml-5 space-y-2 text-white/70 leading-[1.8] font-light text-sm sm:text-base mb-8">
              {exp.impact.map((item: string, i: number) => {
                const parts = item.split('**');
                return (
                  <li key={i}>
                    {parts.length > 2 ? (
                      <>
                        {parts[0]}<strong className="font-semibold text-white/90">{parts[1]}</strong>{parts[2]}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-white/70 leading-[1.8] font-light text-sm sm:text-base mb-8">
              {exp.impact}
            </p>
          )}

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
            {exp.stack.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/80 text-xs font-medium backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function JourneyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position for the glowing wire
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const wireHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-cyan-500/30 selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navigation />

      {/* Cinematic Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(34,211,238,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* SVG Noise Overlay for Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay"
        style={{
          opacity: 0.15,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-32 sm:px-12 sm:pt-48 sm:pb-40">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 sm:mb-32 px-4"
        >
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter leading-tight pb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Architecting Intelligent Products.
          </h1>
          <p className="mt-6 text-white/50 text-base sm:text-lg md:text-xl font-light max-w-4xl mx-auto tracking-wide leading-relaxed">
            Leveraging modern AI tools, low-code architecture, and strategic product execution to turn complex market problems into scalable software ecosystems.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full mx-auto max-w-5xl">

          {/* Central Wire Base */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Animated Glowing Fill Wire */}
          <motion.div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent -translate-x-1/2 origin-top shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            style={{ scaleY: wireHeight }}
          />

          {/* Staggered Experience Cards */}
          <div className="flex flex-col pl-14 sm:pl-0 sm:pt-10">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} isMobile={isMobile} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}