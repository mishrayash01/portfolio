import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Navigation from "@/react-app/components/Navigation";
import { personalInfo } from "@/data/portfolio";

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mishrayash01" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yash-mishra-b90782332/" },
    { icon: Mail, label: "Gmail", href: "mailto:yashmishra1102005@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-center">
        {/* Deep Radial Glows */}
        <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

        {/* Giant Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden">
          <h1 className="text-[12rem] md:text-[22rem] font-black tracking-tighter text-white/[0.02] select-none leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            CONTACT
          </h1>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
              Let's Connect
            </h1>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-white glow-text">Contact Info</h2>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="neuro-card p-4 rounded-xl flex items-center gap-4 hover:glow-border-blue transition-all duration-300"
                      >
                        <div className="neuro-card p-3 rounded-lg glow-border-emerald">
                          <Icon size={20} className="text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          <p className="text-gray-200 font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    );

                    return item.href ? (
                      <a key={index} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
                
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="neuro-card p-6 rounded-xl flex flex-col items-center gap-3 hover:glow-border-gold transition-all duration-300"
                      >
                        <Icon size={28} />
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
