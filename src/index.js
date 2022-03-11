import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';
// bootstarp
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// fontawsom
import 'font-awesome/css/font-awesome.min.css'


ReactDOM.render( <
        BrowserRouter > <
        App / > < /BrowserRouter>, document.getElementById("root"));