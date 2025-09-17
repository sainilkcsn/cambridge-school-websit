import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Address: Cambridge School, Noida, Uttar Pradesh</p>
        <p>Phone: +91-1234567890</p>
        <p>Email: info@cambridgeschool.edu.in</p>
      </div>
      <Footer />
    </div>
  );
}