import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import {Service} from "@/sections/Service"
import { WhyUs } from "@/sections/WhyUs";
import { Blog } from "@/sections/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Service />
      <WhyUs />
      <Testimonials />
      <Blog />
      < CallToAction />
      <Footer />
    </>
  );
}
