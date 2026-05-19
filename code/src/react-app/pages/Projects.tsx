import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code } from "lucide-react";
import Navigation from "@/react-app/components/Navigation";
import { projects, skills } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Helper to ensure URL is valid and absolute
  const getUrl = (url: string) => {
    if (url.startsWith('http')) return url;
    return `https://${url}`;
  };

  const projectUrl = getUrl(project.url);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -10 }}
      className="glass-card p-8 rounded-2xl hover:glow-border-emerald transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="neuro-card p-3 rounded-xl glow-border-blue">
          <Code size={24} className="text-blue-400" />
        </div>
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="neuro-card p-3 rounded-xl hover:glow-border-emerald transition-all duration-300"
        >
          <ExternalLink size={20} className="text-emerald-400" />
        </motion.a>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white glow-text">{project.title}</h3>

      <div className="mb-4">
        <p className="text-emerald-400 font-medium text-sm">{project.stack}</p>
      </div>

      <div className="flex-1">
        {project.description.map((desc: string, i: number) => (
          <p key={i} className="text-gray-300 mb-3 leading-relaxed">
            {desc}
          </p>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, skills: skillList, color, delay }: { title: string; skills: string[]; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 rounded-2xl"
    >
      <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="neuro-card px-4 py-2 rounded-lg text-sm hover:glow-border-emerald transition-all duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Animation moved from Home */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 noise-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
              My Projects
            </h1>
            <p className="text-xl text-gray-400">
              Building solutions that matter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-center glow-text">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory
              title="Product Management"
              skills={skills.productManagement}
              color="text-emerald-400"
              delay={0.5}
            />
            <SkillCategory
              title="Technical Stack"
              skills={skills.technicalStack}
              color="text-blue-400"
              delay={0.6}
            />
            <SkillCategory
              title="Tools"
              skills={skills.tools}
              color="text-amber-400"
              delay={0.7}
            />
            <SkillCategory
              title="Soft Skills"
              skills={skills.softSkills}
              color="text-purple-400"
              delay={0.8}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
