import { TrendingUp, Heart, Shield, Cpu } from "lucide-react";
import photozoneImg from "@/assets/photozone.jpg";

const advantages = [
  {
    icon: TrendingUp,
    title: "Опыт и понимание",
    description: "Знаем специфику работы в парках: от требований к безопасности до визуального оформления в стиле локации.",
  },
  {
    icon: Cpu,
    title: "IT-технологии",
    description: "Развиваемся в IT-направлении, используя современные алгоритмы и профильные приложения для обработки фото.",
  },
  {
    icon: Shield,
    title: "Долгосрочный результат",
    description: "Работаем на репутацию. Берем на себя весь цикл: от монтажа до обучения персонала стандартам сервиса.",
  },
  {
    icon: Heart,
    title: "Синергия с парком",
    description: "Наш персонал организует потоки гостей в пиковые часы, повышая общий комфорт и вовлеченность посетителей.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">Преимущества</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Почему выбирают нас</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <adv.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              src={photozoneImg}
              alt="Работа фотозоны в парке"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;