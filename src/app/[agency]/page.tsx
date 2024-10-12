// src/app/[agency]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FilterSection from '../../components/FilterSection';
import Image from 'next/image';
import { Star } from 'lucide-react';

// Define the interface for Agency
interface Agency {
  name: string;
  location: string;
  teamSize: string;
  rate: string;
  description: string;
}

// List of agencies
const agencies: Agency[] = [
  {
    name: 'Digital Silk',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$150/hr',
    description: 'We build top-quality digital solutions for brands.',
  },
  // Add other agencies here
];

export default function AgencyPage() {
  const router = useRouter();
  
  // Update state to allow for both null and Agency types
  const [agency, setAgency] = useState<Agency | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && router) {
      const agencyName = window.location.pathname.split('/').pop();
      const foundAgency = agencies.find(
        (agency) => agency.name.toLowerCase().replace(/\s+/g, '-') === agencyName
      );
      if (foundAgency) {
        setAgency(foundAgency);
      }
    }
  }, [isMounted, router]);

  if (!agency) {
    return <p>Loading...</p>;
  }

  const imagePath = `/images/${agency.name.toLowerCase().replace(/\s+/g, '-')}.png`;

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row">
        {/* Render FilterSection */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <FilterSection />
        </div>

        {/* Agency details section */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-3xl font-bold">{agency.name}</h1>
          <div className="p-4 mt-5 rounded-lg shadow-2xl">
            <Image
              src={imagePath}
              alt={`${agency.name} logo`}
              width={300}
              height={150}
              className="mb-4 w-auto h-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/default-image.png';
              }}
            />
            <p>{agency.description}</p>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4">
              <strong>Location:</strong> {agency.location}
            </p>
            <p>
              <strong>Hourly Rate:</strong> {agency.rate}
            </p>
            <p>
              <strong>Team Size:</strong> {agency.teamSize}
            </p>
            <button className="mt-4 mr-4 bg-black text-white px-4 py-2 rounded">Visit Website</button>
            <button className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">View Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
