export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={cert.fullImage}
        alt={cert.title}
        className="max-w-11/12 max-h-[90vh] object-contain"
      />
    </div>
  );
}
