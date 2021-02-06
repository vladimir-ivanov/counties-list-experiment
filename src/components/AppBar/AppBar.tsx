import React, { FC } from 'react';
import './AppBar.css';

const AppBar: FC = ({ children }) => (<header className='app-bar'>{children}</header>);

export default AppBar;
