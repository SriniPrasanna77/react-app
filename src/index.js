import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import { robots } from './robots';
import Cards from './Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cards robots={robots} />
  </React.StrictMode>
);
