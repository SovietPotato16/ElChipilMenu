import { Button } from "@/components/ui/button";
import { ArrowLeft, Utensils, Wine } from "lucide-react";

interface NavigationProps {
  currentSection: 'home' | 'platillos' | 'bebidas';
  onNavigate: (section: 'home' | 'platillos' | 'bebidas') => void;
}

export default function Navigation({ currentSection, onNavigate }: NavigationProps) {
  if (currentSection === 'home') {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-zinc-300 hover:text-yellow-600 hover:bg-zinc-800/50 px-4 py-2 rounded-lg border border-transparent hover:border-yellow-600/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline font-light">Inicio</span>
          </Button>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair italic mb-1">
              ElChipil
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              {currentSection === 'platillos' ? 'Nuestros Platillos' : 'Nuestras Bebidas'}
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant={currentSection === 'platillos' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onNavigate('platillos')}
              className={currentSection === 'platillos' 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-zinc-950 font-medium rounded-lg' 
                : 'border-zinc-700 text-black bg-white hover:bg-zinc-800 hover:text-yellow-600 hover:border-yellow-600/50 rounded-lg'
              }
            >
              <Utensils className={`w-4 h-4 sm:mr-2 ${currentSection === 'platillos' ? 'text-zinc-950' : 'text-black hover:text-yellow-600'}`} />
              <span className="hidden sm:inline">Platillos</span>
            </Button>
            <Button
              variant={currentSection === 'bebidas' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onNavigate('bebidas')}
              className={currentSection === 'bebidas' 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-zinc-950 font-medium rounded-lg' 
                : 'border-zinc-700 text-black bg-white hover:bg-zinc-800 hover:text-yellow-600 hover:border-yellow-600/50 rounded-lg'
              }
            >
              <Wine className={`w-4 h-4 sm:mr-2 ${currentSection === 'bebidas' ? 'text-zinc-950' : 'text-black hover:text-yellow-600'}`} />
              <span className="hidden sm:inline">Bebidas</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}