import React from 'react'
import ReactDOM from 'react-dom'

//Routes
import { BrowserRouter } from 'react-router-dom';
import App from './app';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));