import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import StandardsSection from "@/components/StandardsSection";
import ProcessSection from "@/components/ProcessSection";
import ConditionsSection from "@/components/ConditionsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <StandardsSection />
      <ProcessSection />
      <ConditionsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
