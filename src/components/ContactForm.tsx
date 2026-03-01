import { useState } from "react";

const ContactForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/5">
      <div className="max-w-3xl mx-auto bg-background rounded-3xl shadow-xl p-8 md:p-12 border border-border">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Стать партнером</h2>
          <p className="text-muted-foreground">
            Оставьте контакты, и Александр Никонов свяжется с вами для обсуждения условий размещения в вашем парке
          </p>
        </div>

        {/* Замени ТВОЙ_ID на ID, который даст Formspree.io */}
        <form action="https://formspree.io/f/ТВОЙ_ID" method="POST" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Ваше имя</label>
              <input 
                name="name"
                type="text" 
                placeholder="Иван" 
                required 
                className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Телефон</label>
              <input 
                name="phone"
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 000-00-00" 
                required 
                className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary outline-none transition-all"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-secondary text-secondary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Отправить предложение
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;