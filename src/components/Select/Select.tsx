import React, { FC, SyntheticEvent, useCallback } from 'react';
import './Select.css';
import { KeyValuePair } from '../sharedDomain';

interface SelectInProps {
  label?: string;
  selected?: string;
  items: KeyValuePair[];
}

interface SelectOutProps {
  onChange: (key: string, ev: SyntheticEvent) => void;
}

const Select: FC<SelectInProps & SelectOutProps> = ({ items, selected, onChange, label }) => {
  const onSelectChange = useCallback((ev: SyntheticEvent) => {
    const selection = items[(ev.target as any).selectedIndex] || {} as KeyValuePair;

    onChange(selection.key || '', ev);
  }, [items, onChange]);

  return (
    <div className='select'>
      <label>
        {label}
        <select value={selected} onChange={onSelectChange}>
          {items.map(({ key, value }) => (
            <option key={key}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
