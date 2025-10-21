import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedDeals } from "@/components/FeaturedDeals";
import { Testimonials } from "@/components/Testimonials";
import { Giveaway } from "@/components/Giveaway";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <FeaturedDeals />
      <Testimonials />
      <Giveaway />
      <Footer />
    </main>
  );
};

export default Index;
