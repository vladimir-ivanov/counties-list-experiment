import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import './Input.css';

interface InputInProps {
  label?: string;
  value?: string;
  placeholder?: string;
}

interface InputOutProps {
  onChange: (value: string) => void;
}

const Input: FC<InputInProps & InputOutProps> = (
  { value = '', label = '', placeholder = '', onChange }
) => {
  const [val, setVal] = useState(value);

  const onInputChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setVal(value);
    onChange(value);
  }, [onChange]);

  return (
    <div className='input'>
      <label>
        {label}
        <input value={val} onChange={onInputChange} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
