import Navigation from "@/components/focus/Navigation";
import Hero from "@/components/focus/Hero";
import Marquee from "@/components/focus/Marquee";
import FeaturedShoots from "@/components/focus/FeaturedShoots";
import Albums from "@/components/focus/Albums";
import ClientStories from "@/components/focus/ClientStories";
import Services from "@/components/focus/Services";
import Journal from "@/components/focus/Journal";
import Booking from "@/components/focus/Booking";
import Footer from "@/components/focus/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Marquee />
      <FeaturedShoots />
      <Albums />
      <ClientStories />
      <Services />
      <Journal />
      <Booking />
      <Footer />
    </main>
  );
};

export default Index;
