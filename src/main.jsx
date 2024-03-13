import React from 'react';
import ReactDOM from 'react-dom/client';
import Controls from './Controls.jsx';
import { GlobalProvider } from './GlobalContext.jsx';
import './index.css';
import LowerThirds from './LowerThirds.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <Controls />
    </GlobalProvider>
  </React.StrictMode>
);
