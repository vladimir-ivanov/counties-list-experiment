import React, { FC, useEffect, useState } from 'react';
import { Card, KeyValuePair, List } from '../../components';
import { Country } from '../../services/domain/Country';
import './CountriesList.css';

const formatter = (value: number) => new Intl.NumberFormat('en', {
}).format(value);

export interface CountriesListInProps {
  countries: Country[];
}

export interface CountriesListOutProps {
  onCountryClick: (alpha3Code: string) => void;
}

const CountriesList: FC<CountriesListInProps & CountriesListOutProps> = (
  { countries, onCountryClick }
) => {
  const [list, setList] = useState<KeyValuePair[]>([]);

  useEffect(() => {
    setList(countries.map(({ name, alpha3Code, population }) => ({
      key: alpha3Code,
      value: `${name} (${formatter(population)})`
    })));
  }, [countries]);

  return (
    <Card className="countries-list">
      <List items={list} onClick={onCountryClick} />
    </Card>
  );
};

export default CountriesList;
