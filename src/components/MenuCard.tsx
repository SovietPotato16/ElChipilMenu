import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Platillo, Bebida } from "@/data/menu";

interface MenuCardProps {
  item: Platillo | Bebida;
  type: 'platillo' | 'bebida';
}

const SpiceLevel = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < level ? "text-red-500" : "text-zinc-600"
          }`}
        >
          🌶️
        </span>
      ))}
    </div>
  );
};

export default function MenuCard({ item, type }: MenuCardProps) {
  const isPlatillo = type === 'platillo';
  const platillo = isPlatillo ? item as Platillo : null;
  const bebida = !isPlatillo ? item as Bebida : null;

  return (
    <Card className="group overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 shadow-2xl hover:shadow-yellow-600/20 transition-all duration-500 hover:-translate-y-2 rounded-xl">
      <div className="relative overflow-hidden">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Spice level at the top left */}
          {isPlatillo && platillo!.picante > 0 && (
            <div className="flex items-center gap-2 bg-zinc-950/80 backdrop-blur-sm px-3 py-2 rounded-lg">
              <SpiceLevel level={platillo!.picante} />
            </div>
          )}
          {/* Category badge at the top right */}
          <Badge 
            variant="secondary" 
            className="bg-yellow-600/90 text-zinc-950 border-none text-xs font-medium px-3 py-1 rounded-lg ml-auto"
          >
            {isPlatillo ? platillo!.categoria : bebida!.categoria}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-white text-xl leading-tight line-clamp-2 font-playfair italic">
            {item.nombre}
          </h3>
          <div className="text-right flex-shrink-0">
            <span className="text-2xl font-bold text-yellow-600 font-playfair">
              ${item.precio}
            </span>
            <div className="text-xs text-zinc-400 font-light">MXN</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3 font-light">
          {item.descripcion}
        </p>
        
        <div className="flex items-center justify-between">
          {bebida && bebida.alcoholica !== undefined && (
            <Badge 
              variant={bebida.alcoholica ? "destructive" : "default"}
              className={`text-xs rounded-lg ${
                bebida.alcoholica 
                  ? "bg-red-900/50 text-red-300 border-red-800" 
                  : "bg-green-900/50 text-green-300 border-green-800"
              }`}
            >
              {bebida.alcoholica ? "Con Alcohol" : "Sin Alcohol"}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}