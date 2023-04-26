import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BtgSportsPvdr } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BtgSportsPvdr>
    <App />
  </BtgSportsPvdr>
);
