import React, { FC, useCallback } from 'react';
import './List.css';
import { KeyValuePair } from '../sharedDomain';

interface ListInProps {
  items: KeyValuePair[];
  onClick?: (key: string) => void;
}

const List: FC<ListInProps> = ({ items, onClick }) => {
  const onButtonClick = useCallback((key: string) => () => {
    if (onClick) {
      onClick(key);
    }
  }, [onClick]);
  return (
    <ul className='list'>
      {items.map(({ key, value }) => (
        <li key={key}>
          {onClick ? (<button onClick={onButtonClick(key)}>{value}</button>) : value}
        </li>
      ))}
    </ul>
  );
};

export default List;
