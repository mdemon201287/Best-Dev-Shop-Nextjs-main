// src/app/[agency]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Ensure correct import
import FilterSection from '../../components/FilterSection'; // Import FilterSection component
import { Star } from 'lucide-react';

interface Agency {
  name: string;
  location: string;
  teamSize: string;
  rate: string;
  description: string;
}

const agencies = [
  {
    name: 'Digital Silk',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$150/hr',
    description: 'We build top-quality digital solutions for brands.',
  },
  {
    name: 'Think to Share',
    location: 'San Francisco, US',
    teamSize: '50-100',
    rate: '$200/hr',
    description: 'Leading software development company in the Bay Area.',
  },
  {
    name: 'Ignite Visibility',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
    description: 'Experts in marketing and brand visibility.',
  },
  {
    name: 'Trango Tech',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
    description: 'Top technology and consulting services.',
  },
  {
    name: 'Eseo Space',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
    description: 'Space technology and software solutions.',
  },
];

export default function AgencyPage() {
  const router = useRouter();
  const [agency, setAgency] = useState<Agency | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted before using router
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && router) {
      const agencyName = window.location.pathname.split('/').pop();

      if (agencyName) {
        const foundAgency = agencies.find(
          (agency) => agency.name.toLowerCase().replace(/\s+/g, '-') === agencyName
        );
        if (foundAgency) {
          setAgency(foundAgency);
        }
      }
    }
  }, [isMounted, router]);

  // Show loading state if agency is not loaded yet
  if (!agency) {
    return <p>Loading...</p>;
  }

  // Construct image path based on agency name
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
          <div className='p-4 mt-5 rounded-lg shadow-2xl'>
          <img
            src={imagePath}
            alt={`${agency.name} logo`}
            className="mb-4 w-auto h-auto object-contain "
            onError={(e) => {
              // Handle fallback if image doesn't exist
              e.currentTarget.src = '/images/default-image.png'; // Fallback image
            }}
          />
          <p>{agency.description}</p>
          <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" />
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
