import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cards } from './components/Cards';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>,
);
