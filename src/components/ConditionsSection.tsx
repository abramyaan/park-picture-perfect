const conditions = [
  {
    parameter: "Площадь размещения",
    value: "от 9 м²",
  },
  {
    parameter: "Формат",
    value: "Фотозона + точка аквагрима",
  },
  {
    parameter: "Оборудование",
    value: "Предоставляем полностью",
  },
  {
    parameter: "Персонал",
    value: "Наши сотрудники",
  },
  {
    parameter: "График работы",
    value: "По согласованию с администрацией ТЦ",
  },
  {
    parameter: "Срок договора",
    value: "От 1 месяца",
  },
  {
    parameter: "Стоимость для парка",
    value: "Бесплатно / % от выручки",
  },
];

const ConditionsSection = () => {
  return (
    <section id="conditions" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3 text-center">
          Условия
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Сотрудничество
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Прозрачные и выгодные условия для обеих сторон
        </p>

        <div className="bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
          <div className="grid grid-cols-2 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider">
            <div className="px-6 py-4">Параметр</div>
            <div className="px-6 py-4">Условие</div>
          </div>
          {conditions.map((c, i) => (
            <div
              key={c.parameter}
              className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-background" : "bg-muted/50"}`}
            >
              <div className="px-6 py-4 font-semibold text-foreground text-sm">
                {c.parameter}
              </div>
              <div className="px-6 py-4 text-muted-foreground text-sm">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
