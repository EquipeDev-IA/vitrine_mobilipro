import Hero from '../sections/Hero.jsx';
import StatsBand from '../sections/StatsBand.jsx';
import Features from '../sections/Features.jsx';
import HowItWorks from '../sections/HowItWorks.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import CTABanner from '../sections/CTABanner.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Home() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <StatsBand />
      <div className="divider" aria-hidden="true" />
      <Features />
      <div className="divider" aria-hidden="true" />
      <HowItWorks />
      <div className="divider" aria-hidden="true" />
      <Testimonials />
      <CTABanner />
    </>
  );
}
