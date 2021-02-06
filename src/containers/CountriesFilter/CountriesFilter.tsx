import React, { FC } from 'react';
import { Card, Input } from '../../components';
import './CountriesFilter.css';

interface CountriesFilterOutProps {
  onChange: (term: string) => void;
}

const CountriesFilter: FC<CountriesFilterOutProps> = ({ onChange }) => (
  <Card className='countries-sorter'>
    <Input label='Search Term: ' placeholder='Enter Term to Search' onChange={onChange} />
  </Card>
);

export default CountriesFilter;
