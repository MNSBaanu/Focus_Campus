import Navigation from "@/components/focus/Navigation";
import Hero from "@/components/focus/Hero";
import Marquee from "@/components/focus/Marquee";
import FeaturedShoots from "@/components/focus/FeaturedShoots";
import Albums from "@/components/focus/Albums";
import Yearbook from "@/components/focus/Yearbook";
import Packages from "@/components/focus/Packages";
import Journal from "@/components/focus/Journal";
import Booking from "@/components/focus/Booking";
import Footer from "@/components/focus/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <Hero />
      <Marquee />
      <FeaturedShoots />
      <Albums />
      <Yearbook />
      <Packages />
      <Journal />
      <Booking />
      <Footer />
    </main>
  );
};

export default Index;
