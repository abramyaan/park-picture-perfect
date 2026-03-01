import heroBg from "@/assets/hero-bg.jpg";
import vkadre from "@/assets/vkadre.png"; 
import { Camera, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Фотозона в парке"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45 hero-overlay" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-up">
        <div className="flex items-center justify-center gap-4 mb-8 opacity-90">
          <Camera className="w-8 h-8 text-secondary" />
          <div className="w-px h-8 bg-secondary/50" />
          <Palette className="w-7 h-7 text-secondary" />
        </div>
        
        <div className="mb-10 flex justify-center">
          <img 
            src={vkadre} 
            alt="В Кадре" 
            className="h-48 md:h-80 w-auto object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]" 
          />
        </div>

        <p className="text-2xl md:text-4xl font-display text-primary-foreground mb-6 italic tracking-wide uppercase">
          Эмоции навсегда
        </p>
        
        <p className="text-lg md:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
          Профессиональные фотозоны и аквагрим для вашего парка. Создаём яркие впечатления, которые заставляют гостей возвращаться снова.
        </p>
        
        <a
          href="#contact"
          className="inline-block bg-secondary text-secondary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all shadow-2xl hover:shadow-secondary/20"
        >
          Обсудить сотрудничество
        </a>
      </div>
    </section>
  );
};

export default HeroSection;