import { Button } from "@/components/ui/button";
import { Utensils, Wine } from "lucide-react";

interface HomePageProps {
  onNavigate: (section: 'platillos' | 'bebidas') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-zinc-950 relative">
      {/* Tropical leaves background image - darkened 10% */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/pexels-catiamatos-1072179.jpg')`,
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-zinc-950/60" />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 py-20 text-center min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white mb-4 italic text-shadow-gold drop-shadow-2xl">
              ElChipil
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-zinc-100 font-light mb-4 font-playfair drop-shadow-lg">
              Cocina Mexicana Gourmet
            </p>
            <p className="text-zinc-200 text-lg max-w-2xl mx-auto mb-16 font-light leading-relaxed drop-shadow-lg">
              Una experiencia culinaria excepcional donde la tradición mexicana se encuentra 
              con la innovación gastronómica contemporánea.
            </p>
            
            {/* Main Navigation Buttons - Side by side with rounded corners */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 max-w-2xl mx-auto">
              <Button
                onClick={() => onNavigate('platillos')}
                size="lg"
                className="bg-zinc-900/80 hover:bg-zinc-800/90 border border-yellow-600/40 hover:border-yellow-600/70 text-white hover:text-yellow-100 px-10 py-8 text-xl font-medium rounded-xl shadow-2xl hover:shadow-yellow-600/30 transition-all duration-300 hover:-translate-y-1 flex-1 w-full sm:w-auto glow-gold-hover font-playfair backdrop-blur-sm"
              >
                <Utensils className="w-6 h-6 mr-4" />
                Nuestros Platillos
              </Button>
              
              <Button
                onClick={() => onNavigate('bebidas')}
                size="lg"
                className="bg-zinc-900/80 hover:bg-zinc-800/90 border border-yellow-600/40 hover:border-yellow-600/70 text-white hover:text-yellow-100 px-10 py-8 text-xl font-medium rounded-xl shadow-2xl hover:shadow-yellow-600/30 transition-all duration-300 hover:-translate-y-1 flex-1 w-full sm:w-auto glow-gold-hover font-playfair backdrop-blur-sm"
              >
                <Wine className="w-6 h-6 mr-4" />
                Nuestras Bebidas
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-zinc-900/80 backdrop-blur-md border-t border-zinc-700/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-yellow-600 mb-3 font-playfair italic">ElChipil</h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
          <p className="text-zinc-200 font-playfair text-lg">Cocina Mexicana Gourmet</p>
          <p className="text-zinc-400 text-sm mt-6 font-light">
            © 2025 ElChipil. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}