import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css'

createRoot(document.getElementById('root')).render(
  // https://legacy.reactjs.org/docs/strict-mode.html
  <React.StrictMode>  
    <GifExpertApp />
  </React.StrictMode>
);


