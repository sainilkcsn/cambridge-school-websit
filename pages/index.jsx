import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoCard from '../components/InfoCard';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard title="Admissions Open" description="Apply now for the next academic session." />
        <InfoCard title="Academic Excellence" description="Dedicated teachers, modern facilities, and comprehensive curriculum." />
        <InfoCard title="Contact Us" description="Get in touch for queries or admissions help." />
      </div>
      <Footer />
    </div>
  );
}