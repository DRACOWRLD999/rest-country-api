import React, { useEffect, useState } from 'react';

export const CountryDataContext = React.createContext();

export function CountryDataProvider({ name, children }) {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function fetchCountry(name) {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await response.json();
      setCountryData(data[0]);
    }

    if (name) {
      fetchCountry(name);
    }
  }, [name]);
  return (
    <CountryDataContext.Provider value={countryData}>
      {children}
    </CountryDataContext.Provider>
  );
}
