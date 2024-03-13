import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Controls from './Controls.jsx';
import { GlobalProvider } from './GlobalContext.jsx';
import './index.css';
import LowerThirds from './LowerThirds.jsx';

let root = document.getElementById('root');
if (!root._reactRootContainer) {
  root = ReactDOM.createRoot(root);
}

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Controls />} />
      <Route path='/controls' element={<Controls />} />
      <Route path='/lower-thirds' element={<LowerThirds />} />
    </Routes>
  );
};

root.render(
  <GlobalProvider>
    <Router>
      <Main />
    </Router>
  </GlobalProvider>
);
