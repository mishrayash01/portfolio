import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";

export default function BottomNav() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Journey", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full flex justify-center py-12 mt-auto">
      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseLeave={() => setHoveredIndex(null)}
        className="px-6 py-3 rounded-full flex gap-2 sm:gap-4 relative bg-[#131313] shadow-[6px_6px_12px_#0a0a0a,-6px_-6px_12px_#1c1c1c]"
      >
        {links.map((link, index) => {
          const isActive =
            location.pathname === link.path ||
            (link.path !== "/" && location.pathname.startsWith(link.path));

          return (
            <Link
              key={link.name}
              to={link.path}
              className="relative z-10"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navHover"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-inner"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div
                className={`text-sm font-medium tracking-wide px-4 py-2 transition-colors duration-300 ${
                  isActive || hoveredIndex === index
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {link.name}
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
