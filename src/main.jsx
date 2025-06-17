/* eslint-disable no-unexpected-multiline */
import { StrictMode } from 'react';

//==========================================================================

import { createRoot } from 'react-dom/client'

//==========================================================================

import "./styles/resets.css";

//==========================================================================

import { App } from './App.jsx';

//==========================================================================

const root =
  document.querySelector
    ("#root");

//==========================================================================

createRoot(root).render(
  <StrictMode>
    <main>
      <App />
    </main>
  </StrictMode>,
);
