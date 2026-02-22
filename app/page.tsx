import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Tiers from "@/components/Tiers";
import AddOns from "@/components/AddOns";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Tiers />
      <AddOns />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </main>
  );
}
