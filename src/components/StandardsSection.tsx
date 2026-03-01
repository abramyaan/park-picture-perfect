import { ShieldCheck, Users, Sparkles, Star } from "lucide-react";
import aquagrimImg from "@/assets/aquagrim.jpg";

const standards = [
  {
    icon: ShieldCheck,
    title: "Безопасность 100%",
    description: "Используем исключительно профессиональные сертифицированные краски. Гипоаллергенно и безопасно для кожи детей.",
  },
  {
    icon: Sparkles,
    title: "Высокий сервис",
    description: "Опрятный внешний вид, доброжелательность и специальное обучение каждого сотрудника этике общения.",
  },
  {
    icon: Users,
    title: "Работа в команде",
    description: "Мы не обособлены: наш персонал помогает гостям ориентироваться в парке и взаимодействует с вашей командой.",
  },
  {
    icon: Star,
    title: "Профессиональная база",
    description: "Собственное оборудование для моментальной печати и создания уникальных фото-шаров высокого качества.",
  },
];

const StandardsSection = () => {
  return (
    <section id="standards" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <img
              src={aquagrimImg}
              alt="Профессиональный аквагрим"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">Стандарты качества</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Качество для нас — основа работы</h2>
            <div className="space-y-8">
              {standards.map((s) => (
                <div key={s.title} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-secondary group-hover:text-white">
                    <s.icon className="w-6 h-6 text-secondary transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;