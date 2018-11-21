import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Score from './components/score/score.js';
import Footer from './components/footer/footer.js';
import Utilities from './components/utilities/utilities';

class App extends Component {
  render() {
    return (
      <div className="container-fluid app-container">
        <Header />
        <Score />
        <Utilities />
        <Footer />
      </div>
    );
  }
}

export default App;
