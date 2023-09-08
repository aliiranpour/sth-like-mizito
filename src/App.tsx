import React from 'react';
import Sidebar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Webroutes from './routers/router';
import Sharedlayout from './layout/Sharedlayout';

function App() {
  return (
    <BrowserRouter >
      <Webroutes />
    </BrowserRouter>
  );
}

export default App;
