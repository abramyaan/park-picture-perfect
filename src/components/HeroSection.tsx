import heroBg from "@/assets/hero-bg.jpg";
import { Camera, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Фотозона в торговом центре"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Camera className="w-8 h-8 text-secondary" />
          <Palette className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          В Кадре
        </h1>
        <p className="text-2xl md:text-3xl font-display text-primary-foreground/90 mb-4 italic">
          Эмоции навсегда
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto mb-10">
          Фотозоны и аквагрим в торговых центрах — создаём яркие впечатления для ваших посетителей
        </p>
        <a
          href="#conditions"
          className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Условия сотрудничества
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
