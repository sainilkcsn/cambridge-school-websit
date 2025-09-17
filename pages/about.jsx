import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4">About Cambridge School</h1>
        <p>Cambridge School, Noida is committed to providing quality education and a nurturing environment to foster academic and personal growth.</p>
      </div>
      <Footer />
    </div>
  );
}