import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Smartphone } from "lucide-react";

export default function MobileOptimizedBanner() {
  // Estado para controlar si el banner está visible
  const [isVisible, setIsVisible] = useState(false);
  // Estado para detectar si es desktop
  const [isDesktop, setIsDesktop] = useState(false);
  // Estado para la animación de entrada
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    // Función para verificar si es una pantalla desktop/tablet
    const checkScreenSize = () => {
      const isDesktopScreen = window.innerWidth >= 768; // md breakpoint de Tailwind
      setIsDesktop(isDesktopScreen);
      
      // Solo mostrar el banner si es desktop y no se ha cerrado antes
      if (isDesktopScreen && !localStorage.getItem('mobile-banner-dismissed')) {
        setIsVisible(true);
        // Activar animación después de un pequeño delay
        setTimeout(() => setIsAnimatingIn(true), 100);
      }
    };

    // Verificar al cargar la página
    checkScreenSize();
    
    // Agregar event listener para cambios de tamaño de ventana
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup del event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Función para cerrar el banner con animación
  const dismissBanner = () => {
    setIsAnimatingIn(false);
    // Esperar a que termine la animación antes de ocultar completamente
    setTimeout(() => {
      setIsVisible(false);
      // Recordar que el usuario cerró el banner
      localStorage.setItem('mobile-banner-dismissed', 'true');
    }, 300);
  };

  // No renderizar nada si es móvil o el banner no debe ser visible
  if (!isDesktop || !isVisible) {
    return null;
  }

  return (
    // Banner fijo en la parte superior con overlay oscuro y animación
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-zinc-900/95 via-zinc-800/95 to-zinc-900/95 backdrop-blur-md border-b border-yellow-600/30 shadow-2xl transform transition-all duration-300 ease-in-out ${
        isAnimatingIn ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Contenido del banner */}
          <div className="flex items-center space-x-4">
            {/* Icono de móvil con efecto dorado y pulso suave */}
            <div className="flex-shrink-0 p-2 bg-yellow-600/20 rounded-full border border-yellow-600/40 animate-pulse">
              <Smartphone className="w-5 h-5 text-yellow-500" />
            </div>
            
            {/* Mensaje del banner */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <p className="text-white font-medium text-sm sm:text-base font-playfair">
                🏷️ Este sitio está optimizado para dispositivos móviles.
              </p>
              <p className="text-zinc-300 text-sm font-light">
                Para la mejor experiencia, visítanos desde tu teléfono 📱
              </p>
            </div>
          </div>
          
          {/* Botón para cerrar el banner */}
          <Button
            onClick={dismissBanner}
            variant="ghost"
            size="sm"
            className="flex-shrink-0 text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-200 ml-4 rounded-full"
            aria-label="Cerrar aviso de optimización móvil"
            title="Cerrar aviso"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 