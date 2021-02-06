import React, { FC } from 'react';
import './Card.css';

interface CardInProps {
  className?: string;
}

const Card: FC<CardInProps> = (
  { children, className }
  ) => (<div className={`card ${className}`}>{children}</div>);

export default Card;
