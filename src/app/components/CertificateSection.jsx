export default function CertificateCard({ cert, onClick }) {
  return (
    <div
      onClick={() => onClick(cert)}
      className="cursor-pointer border rounded-md overflow-hidden shadow-md hover:shadow-xl transition w-30vw m-2 bg-white"
    >
      <img src={cert.thumbnail} alt={cert.title} className="w-full h-32 object-cover" />
      <div className="p-2 text-center text-sm">{cert.title}</div>
    </div>
  );
}
