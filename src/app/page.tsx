// src/app/page.tsx

'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import IdealProjectPartner from '@/components/IdealProjectPartner';
import SlidingLogos from '@/components/SlidingLogos';
import ClientTestimonials from '@/components/ClientTestimonials';
import FeaturedAgenciesSection from '@/components/FeaturedAgenciesSection';
import FindandContact from '@/components/FindandContact';

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
    name: 'Eseo Space',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
];

export default function Home() {
  const [filteredAgencies, setFilteredAgencies] = useState(agencies);

  const handleSearch = (searchQuery: string, locationQuery: string) => {
    const formattedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');
    const formattedLocationQuery = locationQuery.toLowerCase().replace(/\s+/g, '-');

    const matchingAgencies = agencies.filter(
      (agency) =>
        agency.name.toLowerCase().startsWith(formattedSearchQuery) &&
        agency.location.toLowerCase().startsWith(formattedLocationQuery)
    );

    setFilteredAgencies(matchingAgencies);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection handleSearch={handleSearch} />
        <FindandContact />
        <IdealProjectPartner />
        <FeaturedAgenciesSection agencies={filteredAgencies} />
        <SlidingLogos />
        <ClientTestimonials />
      </main>
    </div>
  );
}