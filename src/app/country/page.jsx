'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { CountryDataProvider } from '../components/country-data';
import CountryDetails from '../components/country-detaills';
import Back from '../components/back-btn';

export default function CountryPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <main className='bg-zinc-50'>
      <div>
        <Back />
      </div>
      <CountryDataProvider name={name}>
        <CountryDetails />
      </CountryDataProvider>
    </main>
  );
}
