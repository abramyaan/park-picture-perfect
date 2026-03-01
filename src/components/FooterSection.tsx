import { Phone, Mail, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 border-b border-secondary/30 pb-2 inline-block">В Кадре</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Мы не просто арендаторы, а часть общей системы сервиса парка. Создаём качественный продукт и сервис.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-secondary">Контакты</h4>
            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/90 font-medium mb-1">Никонов Александр</p>
              <a
                href="tel:+79619000056"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-secondary" />
                8 (961) 900-00-56
              </a>
              <a
                href="mailto:info@vkadre.ru"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-secondary" />
                info@vkadre.ru
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-secondary">Сотрудничество</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Открыты к обсуждению индивидуальных условий размещения в вашем парке.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} В Кадре. Фотоуслуги и аквагрим.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;