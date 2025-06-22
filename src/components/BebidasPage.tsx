import { useState } from "react";
import { Button } from "@/components/ui/button";
import MenuCard from "./MenuCard";
import { bebidas, categoriasBebidas } from "@/data/menu";

export default function BebidasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const filteredBebidas = selectedCategory === 'Todas' 
    ? bebidas 
    : bebidas.filter(bebida => bebida.categoria === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair italic">
            Nuestras Bebidas
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Una cuidadosa selección de bebidas premium que complementan perfectamente nuestra propuesta gastronómica
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedCategory === 'Todas' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Todas')}
              className={selectedCategory === 'Todas' 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-black font-medium rounded-lg px-6 py-3' 
                : 'border-zinc-700 text-black bg-white hover:bg-zinc-800 hover:text-yellow-600 hover:border-yellow-600/50 rounded-lg px-6 py-3'
              }
            >
              Todas las Bebidas
            </Button>
            {categoriasBebidas.map((categoria) => (
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

        {/* Bebidas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredBebidas.map((bebida) => (
            <MenuCard
              key={bebida.id}
              item={bebida}
              type="bebida"
            />
          ))}
        </div>

        {filteredBebidas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-xl font-light">
              No hay bebidas disponibles en esta categoría.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-playfair italic">
              Nuestra Selección de Bebidas
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-zinc-300">
              <div>
                <h4 className="font-semibold text-yellow-600 mb-4 text-lg font-playfair">Bebidas Alcohólicas Premium</h4>
                <p className="font-light leading-relaxed">
                  Nuestra carta incluye una selección excepcional de mezcales artesanales de Oaxaca, 
                  tequilas premium de las mejores destilerías, vinos mexicanos de reconocidas casas 
                  vinícolas y cervezas artesanales de productores locales selectos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-600 mb-4 text-lg font-playfair">Bebidas Sin Alcohol</h4>
                <p className="font-light leading-relaxed">
                  Aguas frescas preparadas diariamente con frutas de temporada de la más alta calidad, 
                  hierbas aromáticas cultivadas localmente y endulzantes naturales que realzan 
                  los sabores auténticos de cada ingrediente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}