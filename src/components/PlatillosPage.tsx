import { useState } from "react";
import { Button } from "@/components/ui/button";
import MenuCard from "./MenuCard";
import { platillos, categoriasPlatillos } from "@/data/menu";

export default function PlatillosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredPlatillos = selectedCategory === 'Todos' 
    ? platillos 
    : platillos.filter(platillo => platillo.categoria === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair italic">
            Nuestros Platillos
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Una selección exquisita de creaciones culinarias que celebran la riqueza gastronómica mexicana
          </p>
        </div>

        {/* Legend - Moved to top */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-4 text-center font-playfair italic">
              Guía de Nivel de Picante
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-3 text-center flex-col">
                <span className="text-lg text-zinc-600">Sin emojis</span>
                <span className="text-zinc-300 font-light">Sin picante</span>
              </div>
              <div className="flex items-center gap-3 text-center flex-col">
                <span className="text-lg">🌶️</span>
                <span className="text-zinc-300 font-light">Suave</span>
              </div>
              <div className="flex items-center gap-3 text-center flex-col">
                <span className="text-lg">🌶️🌶️</span>
                <span className="text-zinc-300 font-light">Medio</span>
              </div>
              <div className="flex items-center gap-3 text-center flex-col">
                <span className="text-lg">🌶️🌶️🌶️</span>
                <span className="text-zinc-300 font-light">Picante</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Todos')}
              className={selectedCategory === 'Todos' 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-black font-medium rounded-lg px-6 py-3' 
                : 'border-zinc-700 text-black bg-white hover:bg-zinc-800 hover:text-yellow-600 hover:border-yellow-600/50 rounded-lg px-6 py-3'
              }
            >
              Todos los Platillos
            </Button>
            {categoriasPlatillos.map((categoria) => (
              <Button
                key={categoria}
                variant={selectedCategory === categoria ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(categoria)}
                className={selectedCategory === categoria 
                  ? 'bg-yellow-600 hover:bg-yellow-700 text-black font-medium rounded-lg px-6 py-3' 
                  : 'border-zinc-700 text-black bg-white hover:bg-zinc-800 hover:text-yellow-600 hover:border-yellow-600/50 rounded-lg px-6 py-3'
                }
              >
                {categoria}
              </Button>
            ))}
          </div>
        </div>

        {/* Platillos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPlatillos.map((platillo) => (
            <MenuCard
              key={platillo.id}
              item={platillo}
              type="platillo"
            />
          ))}
        </div>

        {filteredPlatillos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-xl font-light">
              No hay platillos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}