import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

// Lazy load below-fold sections for faster initial page load
const VideoDemo = dynamic(() => import("@/components/sections/VideoDemo").then(m => ({ default: m.VideoDemo })));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies").then(m => ({ default: m.CaseStudies })));
const Integrations = dynamic(() => import("@/components/sections/Integrations").then(m => ({ default: m.Integrations })));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then(m => ({ default: m.HowItWorks })));
const ROICalculator = dynamic(() => import("@/components/sections/ROICalculator").then(m => ({ default: m.ROICalculator })));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const About = dynamic(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const Contact = dynamic(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VideoDemo />
      <CaseStudies />
      <Integrations />
      <HowItWorks />
      <ROICalculator />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
