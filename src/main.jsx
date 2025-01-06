import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StyleSheetManager } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
