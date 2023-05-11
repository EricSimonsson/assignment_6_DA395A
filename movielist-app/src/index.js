import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieApplication from './MovieApplication';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieApplication />
  </React.StrictMode>
);