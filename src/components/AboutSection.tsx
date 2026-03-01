import teamImg from "@/assets/team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">О нас</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Кто мы</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">«В Кадре»</strong> — это команда профессионалов, специализирующаяся на предоставлении качественных фотоуслуг в торговых центрах и общественных пространствах.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Мы создаём стильные фотозоны, которые привлекают посетителей и дарят им незабываемые эмоции. Дополнительным направлением нашей деятельности является профессиональный аквагрим для детей и взрослых.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Наша миссия — превращать каждый визит в ТЦ в яркое событие, о котором хочется рассказать друзьям.
          </p>
        </div>
        <div className="relative">
          <img
            src={teamImg}
            alt="Команда В Кадре"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
