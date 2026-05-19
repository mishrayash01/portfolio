import { motion } from "framer-motion";
import { Link } from "react-router";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Journey", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full flex items-center gap-8 shadow-xl"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-[13px] tracking-[0.1em] uppercase font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>
    </div>
  );
}
