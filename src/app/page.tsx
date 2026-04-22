import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Impact from "@/components/sections/Impact";
import Conference from "@/components/sections/Conference";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Testimonials />
      <Conference />
      <CTA />
    </>
  );
}
