import { motion } from "framer-motion";

const About = () => {
  const text = "As an Information Technology undergrad at AKGEC, my focus is on the intersection of product strategy and engineering. I build scalable, data-driven platforms that solve real-world problems, always optimizing for user acquisition and business growth.";
  const words = text.split(" ");

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-black to-zinc-950 px-6 py-24 md:py-32 z-20">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/50 uppercase mb-8 md:mb-12"
        >
          About Me
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.04 } }
          }}
          className="text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-snug text-white/90"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.25em] font-light"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

      </div>

      {/* Subtle top border fade effect (Alternative to gradient) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default About;
