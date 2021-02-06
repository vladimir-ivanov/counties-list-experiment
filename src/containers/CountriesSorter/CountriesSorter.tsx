import React, { FC, useCallback, useState } from 'react';
import { Card, Select } from '../../components';
import './CountriesSorter.css';
import { SortBy, SortDirection, SortField } from '../domain';

const sortByOptions = Object.values(SortBy).map((key) => ({ key, value: key }));
const sortByOrderOptions = Object.values(SortDirection).map((key) => ({ key, value: key }));

interface CountriesSorterOutProps {
  onChange: (sort: SortField) => void;
}

const CountriesSorter: FC<CountriesSorterOutProps> = ({ onChange }) => {
  const [field, setField] = useState<string>(SortBy.Name);
  const [direction, setDirection] = useState<string>(SortDirection.Asc);

  const onFieldChange = useCallback((field: string) => {
    setField(field);
    onChange({ field: field as SortBy, direction: direction as SortDirection });
  }, [direction, onChange]);

  const onDirectionChange = useCallback((direction: string) => {
    setDirection(direction);
    onChange({ field: field as SortBy, direction: direction as SortDirection });
  }, [field, onChange]);

  return (
    <Card className='countries-sorter'>
      <Select selected={field} items={sortByOptions} onChange={onFieldChange} label='Sort By: ' />
      <Select selected={direction} items={sortByOrderOptions} onChange={onDirectionChange} label='Order: ' />
    </Card>
  );
};

export default CountriesSorter;
