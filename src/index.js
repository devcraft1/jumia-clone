import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import NavThree from './components/NavThree';
import Final from './components/Final';
import Gallery from './components/Gallery';
import Nav4 from './components/Nav4';
import Display from './components/Display';
import Slides from './components/newSlide';
import SlideItem from './components/sItem';
import listItems from './components/listItems';
import Story from './components/Story';
import Footer from './components/Footer';
import FooterTwo from './components/FooterTwo';
import Profile from './components/Profile';
import Register from './components/Register';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


