import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='app mx-0'>
      <App />
    </div>
  </React.StrictMode>
);
