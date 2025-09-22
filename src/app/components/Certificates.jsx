"use client"
import { useState } from 'react';
import CertificateCard from './CertificateSection';
import CertificateModal from './CertificateModal';

const certs = [
  
  {
    id: 2,
    title: 'Intership Certificate',
    thumbnail: '/pic1.jpg',
    fullImage: '/pic1.jpg',
  },{
    id: 2,
    title: 'Udamy Course Certificate',
    thumbnail: '/udamy.jpg',
    fullImage: '/udamy.jpg',
  },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-gray-800 text-gray-900 rounded-md"   id='certificates'>
      <header className="p-4 ">
        <h1 className="text-2xl font-bold text-white text-center">My Certificates</h1>
      </header>

      <main className="p-4 flex flex-wrap justify-center">
        {certs.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onClick={setSelectedCert} />
        ))}
      </main>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
