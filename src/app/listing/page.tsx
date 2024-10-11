// src/app/listing/page.tsx

'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const agencies = [
  {
    name: 'Digital Silk',
    location: 'new-york-city',
    teamSize: '50-100',
    rate: '$150/hr',
  },
  {
    name: 'Think to Share',
    location: 'san-francisco',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  // Add more agencies as needed...
]

export default function ListingPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const locationQuery = searchParams.get('location') || ''

  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().replace(/\s+/g, '-').includes(searchQuery) &&
    agency.location.toLowerCase().includes(locationQuery)
  )

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{searchQuery}" in "{locationQuery}"</h1>

      {/* Listing Agencies */}
      <div className="grid grid-cols-1 gap-6">
        {filteredAgencies.length > 0 ? (
          filteredAgencies.map((agency, index) => (
            <Link key={index} href={`/${agency.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="bg-white shadow-lg p-4 rounded-lg flex justify-between items-center cursor-pointer">
                <div>
                  <h2 className="text-xl font-bold">{agency.name}</h2>
                  <p className="text-gray-600">{agency.location.replace(/-/g, ' ')}</p>
                  <p className="text-sm">Team Size: {agency.teamSize}</p>
                  <p className="text-sm">Hourly Rate: {agency.rate}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-4 py-2 rounded-md">Visit Website</button>
                  <button className="bg-gray-200 px-4 py-2 rounded-md">View Portfolio</button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No agencies found matching your search.</p>
        )}
      </div>
    </div>
  )
}
