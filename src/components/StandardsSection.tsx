import { ShieldCheck, Award, Sparkles, Leaf } from "lucide-react";
import aquagrimImg from "@/assets/aquagrim.jpg";

const standards = [
  {
    icon: ShieldCheck,
    title: "Сертифицированные материалы",
    description: "Все краски для аквагрима гипоаллергенны и сертифицированы для использования на детской коже",
  },
  {
    icon: Award,
    title: "Профессиональное оборудование",
    description: "Используем высококачественную фототехнику и печатное оборудование",
  },
  {
    icon: Sparkles,
    title: "Эстетика и стиль",
    description: "Фотозоны выполнены из качественных материалов и регулярно обновляются",
  },
  {
    icon: Leaf,
    title: "Экологичность",
    description: "Используем экологичные материалы, бережно относимся к территории парка",
  },
];

const StandardsSection = () => {
  return (
    <section id="standards" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src={aquagrimImg}
              alt="Аквагрим"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
              Стандарты
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Качество и безопасность
            </h2>
            <div className="space-y-6">
              {standards.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <s.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
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
