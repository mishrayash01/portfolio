import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ExperiencePage from "@/react-app/pages/Experience";
import ProjectsPage from "@/react-app/pages/Projects";
import ContactPage from "@/react-app/pages/Contact";
import BottomNav from "@/react-app/components/BottomNav";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
