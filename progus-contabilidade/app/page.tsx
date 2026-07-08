import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { PlansSection } from "@/sections/PlansSection";
import { StatsSection } from "@/sections/StatsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { TeamSection } from "@/sections/TeamSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PlansSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
