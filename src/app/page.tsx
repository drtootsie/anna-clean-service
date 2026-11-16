import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Checklist from '@/components/Checklist';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingCallBar from '@/components/FloatingCallBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div id="checklist">
        <Checklist />
      </div>
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingCallBar />
    </main>
  );
}
