// src/app/development/page.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import FilterSection from '../../components/FilterSection'; // Correct path for FilterSection component
 // Import your FilterSection component

// Hardcoded list of agencies
const agencies = [
  {
    name: 'Digital Silk',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$150/hr',
  },
  {
    name: 'Think to Share',
    location: 'San Francisco, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'Ignite Visibility',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'Trango Tech',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'eSEO Space',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
];

export default function DevelopmentPage() {
  // Rendering the agencies from local data
  if (!agencies || agencies.length === 0) {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Development Agencies</h2>
          <p>No agencies available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Render the FilterSection */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <FilterSection />
          </div>

          {/* Main content section for agencies */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-3xl font-bold mb-8">Development Agencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {agencies.map((agency) => {
                // Construct the dynamic image path
                const imagePath = `/images/${agency.name.toLowerCase().replace(/\s+/g, '-')}.png`;

                return (
                  <Link key={agency.name} href={`/${agency.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
                      {/* Use the dynamic image path with a fallback */}
                      <Image
                        src={imagePath}
                        alt={`${agency.name} logo`}
                        width={300}
                        height={150}
                        className="mb-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/default-image.png'; // Set your fallback image path
                        }}
                      />
                      <h3 className="text-xl font-semibold mb-2">{agency.name}</h3>
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Growing Brands Online</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{agency.location}</span>
                        <span>{agency.rate}</span>
                      </div>
                      <button className="mt-4 mr-4 bg-black text-white px-4 py-2 rounded">Visit Website</button>
                      <button className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">View Portfolio</button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
