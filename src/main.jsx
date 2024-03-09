import React from 'react';
import ReactDOM from 'react-dom/client';
import Controls from './Controls.jsx';
import './index.css';
import LowerThirds from './LowerThirds.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Controls />
    <LowerThirds />
  </React.StrictMode>
);
