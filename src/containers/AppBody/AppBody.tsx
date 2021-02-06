import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { getCountries } from '../../services';
import { Country } from '../../services/domain/Country';
import { CountriesList } from '../CountriesList';
import { CountriesSorter } from '../CountriesSorter';
import { SortField } from '../domain';

import './AppBody.css';
import { CountriesFilter } from '../CountriesFilter';
import { CountriesListStore } from './CountriesListStore';

const AppBody: FC = () => {
  const countriesListStore = useRef<CountriesListStore>();
  const [displayCountries, setDisplayCountries] = useState<Country[]>([]);

  useEffect(() => {
    // should really be a stream
    getCountries()
      .then(countries => {
        countriesListStore.current = new CountriesListStore(countries);
        setDisplayCountries(countries);
      })
      .catch(() => {

      });
  }, []);

  const onCountriesSorterChange = useCallback((sortField: SortField) => {
    setDisplayCountries(
      countriesListStore.current?.setSortField(sortField).execute() as Country[]
    );
  }, []);

  // todo - add debounce
  const onCountriesFilterChange = useCallback((term: string) => {
    setDisplayCountries(
      countriesListStore.current?.setTerm(term).execute() as Country[]
    );
  }, []);

  const onCountryClick = useCallback((countryCode: string) => {
    window.alert(
      JSON.stringify(displayCountries.find(({ alpha3Code }) => alpha3Code === countryCode))
    );
  }, [displayCountries]);

  return (
    <>
      <div className='display-controls'>
        <CountriesSorter onChange={onCountriesSorterChange} />
        <CountriesFilter onChange={onCountriesFilterChange} />
      </div>
      <CountriesList countries={displayCountries} onCountryClick={onCountryClick} />
    </>
  );
};

export default AppBody;
