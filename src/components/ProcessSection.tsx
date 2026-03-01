import { MessageSquare, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Обсуждение",
    description: "Связываемся с вами, обсуждаем формат, место и условия размещения. Подбираем оптимальный вариант под ваш парк.",
  },
  {
    icon: Handshake,
    step: "02",
    title: "Согласование",
    description: "Заключаем договор, согласовываем график работы, зоны размещения и все организационные моменты.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Запуск",
    description: "Устанавливаем оборудование, запускаем фотозону и точку аквагрима. Работаем и радуем ваших посетителей!",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-4 section-gradient">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
          Процесс
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Как мы работаем
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <s.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <span className="text-secondary font-bold text-sm mb-2">{s.step}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
