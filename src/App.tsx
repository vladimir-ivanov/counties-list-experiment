import React from 'react';

import './App.css';
import { AppBar } from './components';
import { AppBody } from './containers';

const App = () => (
  <div className='app'>
    <AppBar>Countries Info</AppBar>
    <AppBody />
  </div>
);

export default App;
