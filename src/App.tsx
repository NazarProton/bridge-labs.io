export default App;
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhoItsForSection from './components/WhoItsForSection';
import WhyBridgeLabsSection from './components/WhyBridgeLabsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-[#020617] text-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <AboutSection />
        <ServicesSection />
        <WhoItsForSection />
        <WhyBridgeLabsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
