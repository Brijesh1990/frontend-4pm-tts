import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Calc from './components/Calc';
import './style.css';
import 'animate.css';
import CalcApp from './components/CalcApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Calc /> */}
    <CalcApp />
  </StrictMode>
);
