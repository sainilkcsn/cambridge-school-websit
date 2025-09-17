import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Cambridge School</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}