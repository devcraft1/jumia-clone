import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import Nav from './components/Nav';
import Land from './components/Land';
import Grid from './components/Grid';
import NavTwo from './components/NavTwo';
import NavThree from './components/NavThree';
import Final from './components/Final';
import Gallery from './components/Gallery';
import Nav4 from './components/Nav4';
import Display from './components/Display';


ReactDOM.render(<Display />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


