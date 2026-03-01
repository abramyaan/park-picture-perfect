import { MessageSquare, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Заявка и обсуждение",
    description: "Анализируем концепцию вашего парка, подбираем оптимальный формат размещения и точки трафика.",
  },
  {
    icon: Handshake,
    step: "02",
    title: "Договор и застройка",
    description: "Согласовываем индивидуальные условия аренды и аккуратно интегрируем фотозону в ландшафт парка.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Работа и результат",
    description: "Запускаем процессы, радуем гостей качественным сервисом и создаём поводы вернуться в парк.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3 text-center">Этапы запуска</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20">Как мы начинаем работу</h2>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((s, i) => (
            <div key={s.step} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-full h-[2px] bg-secondary/20 -z-10" />
              )}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-6 transition-transform">
                  <s.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <span className="bg-secondary/10 text-secondary font-black px-4 py-1 rounded-full text-xs mb-4 uppercase">Шаг {s.step}</span>
                <h3 className="text-2xl font-bold text-foreground mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;