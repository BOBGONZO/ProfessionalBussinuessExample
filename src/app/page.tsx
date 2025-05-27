import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';
import AOSInit from '@/components/AOSInit';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AOSInit />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <StickyCTA />
      <Footer />
    </main>
  );
}
