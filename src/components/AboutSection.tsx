import teamImg from "@/assets/team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">О компании</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Профессиональные фотоуслуги для парков</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground font-semibold">«В Кадре»</strong> — это команда экспертов, превращающая обычную прогулку в незабываемое событие. Мы специализируемся на моментальной фотопродукции и художественном аквагриме.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-secondary pl-6 py-2 bg-secondary/5 rounded-r-lg">
              «Мы не просто арендаторы, а часть общей системы сервиса парка. Наша задача — создать эмоцию, которая формирует лояльность гостя».
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            В нашем арсенале: уникальные фото-шары, магниты, подарочная продукция и сертифицированные материалы для аквагрима.
          </p>
        </div>
        <div className="relative group">
          <img
            src={teamImg}
            alt="Команда В Кадре"
            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] md:aspect-square transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;