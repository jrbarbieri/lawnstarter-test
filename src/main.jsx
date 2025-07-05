import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>,
);
