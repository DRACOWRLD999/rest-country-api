import React, { useContext } from 'react';
import { CountryDataContext } from '../components/country-data';

export default function CountryDetails() {
    const countryData = useContext(CountryDataContext);

    if (!countryData) {
        return <div>Loading...</div>;
    }
    return (
        <main className="flex flex-row justify-center bg-zinc-50 text-black">
            <div className='w-1/2  flex justify-center items-center mt-8'>
                <img className='h-80 max-w-lg rounded-sm' src={countryData.flags.svg} alt={`Flag of ${countryData.name.common}`} />
            </div>
            <div className='absolute ml-56 mt-5'>
                <h1 className='text-4xl font-bold'>{countryData.name.common}</h1>
            </div>
            <div className='flex w-max ml-24 mt-20 justify-between h-42'>
                <div className='flex flex-col w-40'>
                    <div>
                        <p><strong>Native Name:</strong> {countryData.name.nativeName.common}</p>
                        <p className='w-max'><strong>Population:</strong> {countryData.population}</p>
                        <p><strong>Region:</strong> {countryData.region}</p>
                        <p className='w-max'><strong>Sub Region:</strong> {countryData.subregion}</p>
                        <p><strong>Capital:</strong> {countryData.capital[0]}</p>
                    </div>
                    <div className='mt-8 w-max'>
                        <h1><strong>Border Countries:</strong>
                            <div class="flex flex-wrap">
                                {countryData.borders.map(country => (
                                    <div key={country} class="p-2 ">{country}</div>))}
                            </div>
                        </h1>
                    </div>
                </div>
                <div className='w-96 ml-40'>
                    <p><strong>Top Level Domain:</strong> {countryData.tld[0]}</p>
                    <p><strong>Currencies:</strong> {Object.keys(countryData.currencies).join(', ')}</p>
                    <p><strong>Languages:</strong> {Object.values(countryData.languages).join(', ')}</p>
                </div>
            </div>
        </main>
    );
}
