import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningPath from "@/components/LearningPath";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LearningPath />
      <BentoGrid />
      <Footer />
    </main>
  );
}
