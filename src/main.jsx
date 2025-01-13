import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';

import App from './App';
import ErrorFallback from './ui/ErrorFallback';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <StyleSheetManager shouldForwardProp={() => true}>
        <App />
      </StyleSheetManager>
    </ErrorBoundary>
  </React.StrictMode>
);
