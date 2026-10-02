import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import UseCases from '@/components/UseCases';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <UseCases />
      <Stats/>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
