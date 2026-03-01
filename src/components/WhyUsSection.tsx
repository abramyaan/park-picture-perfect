import { TrendingUp, Heart, Shield, Clock } from "lucide-react";
import photozoneImg from "@/assets/photozone.jpg";

const advantages = [
  {
    icon: TrendingUp,
    title: "Увеличение трафика",
    description: "Наши фотозоны привлекают до 40% больше посетителей в зону размещения",
  },
  {
    icon: Heart,
    title: "Положительные эмоции",
    description: "Создаём атмосферу праздника, повышая лояльность гостей ТЦ",
  },
  {
    icon: Shield,
    title: "Полная ответственность",
    description: "Берём на себя все вопросы по организации, оборудованию и персоналу",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Работаем в удобное для ТЦ время, включая выходные и праздники",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 px-4 section-gradient">
      <div className="max-w-6xl mx-auto">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3 text-center">
          Почему мы
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          Почему ТЦ нас выбирают
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Мы предлагаем готовое решение, которое повышает привлекательность вашего пространства без дополнительных затрат и усилий с вашей стороны.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
          <img
            src={photozoneImg}
            alt="Фотозона в ТЦ"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
