import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningPath from "@/components/LearningPath";
import { ClassSelectionQuiz } from "@/components/ClassSelectionQuiz";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LearningPath />
      <div id="quiz">
        <ClassSelectionQuiz />
      </div>
      <BentoGrid />
      <Footer />
    </main>
  );
}
