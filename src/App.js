import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Duelboard from './components/duelboard/duelboard.js';
import Footer from './components/footer/footer.js';


class App extends Component {
 


  handleView = () => {

  }

  render() {
    return (
      <div className="container-fluid app-container">
        <Header />
        <Duelboard />
        <Footer />
      </div>
    );
  }
}

export default App;
