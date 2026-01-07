import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SyllabusTimeline from "@/components/SyllabusTimeline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SyllabusTimeline />
      <BentoGrid />
      <Footer />
    </main>
  );
}
