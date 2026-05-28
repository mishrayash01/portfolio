import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}