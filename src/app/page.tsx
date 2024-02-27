import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Features";
import FAQ from "./components/Faq";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Feature />
        <FAQ />
        <Pricing />
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
