import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateSection from "@/components/GenerateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
        <>
          <Navbar />
          <HeroCarousel />
          <GenerateSection />
          <Footer />
        </>
  );
}
