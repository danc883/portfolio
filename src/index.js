import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
import './assets/css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/icons/css/ionicons.css';
import './assets/css/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './assets/css/style.scss';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';



ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop />
    </React.Fragment>,
document.getElementById('root'));

serviceWorker.unregister();
