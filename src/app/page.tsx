import { About } from "@/components/About";
import { BookingSteps, Faq } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header, MobileBookBar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Location } from "@/components/Location";
import { Portfolio } from "@/components/Portfolio";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
        <BookingSteps />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
