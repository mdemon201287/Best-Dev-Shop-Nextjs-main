// src/app/search/page.tsx

'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const agencies = [
  { name: 'Digital Silk', location: 'New York City, US', teamSize: '50-100', year: '2015', rate: '$150/hr' },
  // Add more sample agencies here...
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const locationQuery = searchParams.get('location') || ''

  // Filter the agencies based on search query and filters
  const filteredAgencies = agencies.filter(agency => {
    return agency.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
           agency.location.toLowerCase().includes(locationQuery.toLowerCase())
  })

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{searchQuery}" in "{locationQuery}"</h1>
      <div className="grid grid-cols-1 gap-6">
        {filteredAgencies.map((agency, index) => (
          <Link key={index} href={`/${agency.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="bg-white shadow-lg p-4 rounded-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{agency.name}</h2>
                <p className="text-gray-600">{agency.location}</p>
                <p className="text-sm">Team Size: {agency.teamSize}</p>
                <p className="text-sm">Hourly Rate: {agency.rate}</p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-md">Visit Website</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">View Portfolio</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
