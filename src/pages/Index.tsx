import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Portfolio } from "@/components/Portfolio";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Main Landing Page - All sections assembled
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <BeforeAfter />
      <Benefits />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
