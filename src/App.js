import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid app-container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
