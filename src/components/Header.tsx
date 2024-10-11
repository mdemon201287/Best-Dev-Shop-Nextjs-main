// src/app/components/Header.tsx

'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-black text-white p-4 text-center">
            <p className="text-sm">List your business to get top level clients and  level up your agency. <a className='underline cursor-pointer'>List Now</a></p>
        </header>
    );
}