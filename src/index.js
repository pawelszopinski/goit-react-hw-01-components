import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/App';
import { Statistics } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics />
  </React.StrictMode>
);
