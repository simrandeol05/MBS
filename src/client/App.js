import React, { Component } from 'react';
import './app.scss'
import ReactImage from './react.png';
import MasterHeader from './components/MasterHeader.js';
import Footer from './components/Footer.js';
import MainContent from './components/MainContent.js';
import Nav from './components/Nav.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {

  render() {
    return (
      <div>
      <Nav />
      <MasterHeader />
      <MainContent />
      <Footer />
      </div>
    );
  }
}
