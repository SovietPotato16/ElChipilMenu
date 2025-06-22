import { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import PlatillosPage from "./components/PlatillosPage";
import BebidasPage from "./components/BebidasPage";
import "./App.css";

type Section = 'home' | 'platillos' | 'bebidas';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'platillos':
        return <PlatillosPage />;
      case 'bebidas':
        return <BebidasPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-inter">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      <main className="transition-all duration-500 ease-in-out">
        {renderCurrentSection()}
      </main>
    </div>
  );
}

export default App