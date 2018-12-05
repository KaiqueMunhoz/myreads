import React from 'react'
import ReactDOM from 'react-dom'

//Routes
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
      <Routes />
  </BrowserRouter>
  , document.getElementById('root'));