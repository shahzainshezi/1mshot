import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Preloader from "@/components/Preloader";
import Ticker from "@/components/Ticker";
import Miss100 from "@/components/Miss100";
import StatsBanner from "@/components/StatsBanner";
import HowItWorks from "@/components/HowItWorks";
import TickerBar from "@/components/TickerBar";
import TheFormat from "@/components/TheFormat";
import Partners from "@/components/Partners";
import Prizes from "@/components/Prizes";
import BuiltForCompetition from "@/components/BuiltForCompetition";
import LimitedSpots from "@/components/LimitedSpots";
import AfterRegister from "@/components/AfterRegister";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-main">
      <Preloader />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Miss100 />
      <Ticker />
      <StatsBanner />
      <HowItWorks />
      <TickerBar />
      <TheFormat />
      <Partners />
      <Prizes />
      <div className="prizes-ticker-wrap">
        <TickerBar />
      </div>
      <BuiltForCompetition />
      <LimitedSpots />
      <AfterRegister />
      <Footer />
    </main>
  );
}


