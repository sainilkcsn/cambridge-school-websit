export default function InfoCard({ title, description }) {
  return (
    <div className="border p-6 rounded shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}