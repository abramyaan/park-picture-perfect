const conditions = [
  { parameter: "Формат сотрудничества", value: "Аренда площади под фотозону и аквагрим" },
  { parameter: "Интеграция", value: "Аккуратная встройка в существующую концепцию парка" },
  { parameter: "Материалы и база", value: "Полное обеспечение оборудованием и расходниками" },
  { parameter: "Персонал", value: "Квалифицированные сотрудники с обучением стандартам сервиса" },
  { parameter: "Формат размещения", value: "Гибкий / Индивидуальный расчет под локацию" },
  { parameter: "Условия аренды", value: "Прозрачные, понятные и выгодные для парка условия" },
];

const ConditionsSection = () => {
  return (
    <section id="conditions" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">Формат сотрудничества</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Условия для партнеров</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы открыты к диалогу и готовы предложить индивидуальные условия, которые будут максимально эффективны для вашего пространства.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border/50">
          <div className="grid grid-cols-2 bg-secondary text-secondary-foreground font-bold p-6">
            <div className="uppercase tracking-wider text-sm">Параметр</div>
            <div className="uppercase tracking-wider text-sm">Наше предложение</div>
          </div>
          <div className="divide-y divide-border/50">
            {conditions.map((c, i) => (
              <div
                key={c.parameter}
                className="grid grid-cols-2 hover:bg-muted/30 transition-colors"
              >
                <div className="p-6 font-bold text-foreground text-sm border-r border-border/50 flex items-center">
                  {c.parameter}
                </div>
                <div className="p-6 text-muted-foreground text-sm flex items-center italic">
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground italic font-medium">
          * Возможны индивидуальные условия в зависимости от посещаемости и площади парка.
        </p>
      </div>
    </section>
  );
};

export default ConditionsSection;