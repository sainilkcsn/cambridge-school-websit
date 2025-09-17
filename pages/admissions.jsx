import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Admissions() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4">Admissions</h1>
        <p>Admissions are open for the academic session 2025-26. Apply now to secure your child's future.</p>
      </div>
      <Footer />
    </div>
  );
}