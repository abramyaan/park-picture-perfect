import { Phone, Mail, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">В Кадре</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Фотозоны и аквагрим в парках. Создаём яркие впечатления для ваших посетителей.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+79001234567"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +7 (900) 123-45-67
              </a>
              <a
                href="mailto:info@vkadre.ru"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@vkadre.ru
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Соцсети</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @vkadre_photo
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} В Кадре. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
