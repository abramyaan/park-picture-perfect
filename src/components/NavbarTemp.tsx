import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import vkadre from "@/assets/vkadre.png"; // Импортируем твой логотип

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Изменяем прозрачность фона при скролле
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "О нас", href: "#about" },
    { title: "Преимущества", href: "#why-us" },
    { title: "Стандарты", href: "#standards" },
    { title: "Процесс", href: "#process" },
    { title: "Условия", href: "#conditions" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Логотип-ссылка на начало страницы */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <img 
            src={vkadre} 
            alt="В Кадре" 
            className={cn(
              "h-10 md:h-12 w-auto object-contain transition-all duration-300",
              !isScrolled && "brightness-0 invert" // Делаем белым на прозрачном фоне
            )}
          />
          <span className={cn(
            "text-xl font-bold tracking-tighter uppercase hidden sm:block",
            isScrolled ? "text-primary" : "text-primary-foreground"
          )}>
            В Кадре
          </span>
        </a>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Номер телефона справа */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+79619000056"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all font-bold text-sm",
              isScrolled 
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            )}
          >
            <Phone className="w-4 h-4" />
            8 (961) 900-00-56
          </a>
        </div>

        {/* Кнопка мобильного меню */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-foreground w-8 h-8" />
          ) : (
            <Menu className={cn("w-8 h-8", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-background shadow-2xl p-8 flex flex-col gap-6 animate-fade-in md:hidden text-foreground min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <img src={vkadre} alt="Лого" className="h-10 w-auto" />
            <X className="w-8 h-8" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold border-b border-border pb-4"
            >
              {link.title}
            </a>
          ))}
          <a
            href="tel:+79619000056"
            className="flex items-center gap-4 text-secondary text-xl font-black pt-4"
          >
            <Phone className="w-6 h-6" />
            8 (961) 900-00-56
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;