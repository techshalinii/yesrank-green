import { CallToAction } from "@/sections/CallToAction";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import Services from "@/sections/Service";
import { WhyUs } from "@/sections/WhyUs";
import { Blog } from "@/sections/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Services />
      <WhyUs />
      <Testimonials />
      <Blog />
      < CallToAction />
      
    </>
  );
}
