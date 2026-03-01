import Navbar from "@/components/NavbarTemp"; 
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import StandardsSection from "@/components/StandardsSection";
import ProcessSection from "@/components/ProcessSection";
import ConditionsSection from "@/components/ConditionsSection";
import ContactForm from "@/components/ContactForm"; 
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Теперь у каждой секции есть уникальный ID для навигации */}
      
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="why-us">
        <WhyUsSection />
      </section>

      <section id="standards">
        <StandardsSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <section id="conditions">
        <ConditionsSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <FooterSection />
    </main>
  );
};

export default Index;