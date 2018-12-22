import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Score from './components/score/score.js';
import Footer from './components/footer/footer.js';


class App extends Component {
 


  handleView = () => {

  }

  render() {
    return (
      <div className="container-fluid app-container">
          <Header />
          <Score />
          <Footer />
        </div>
    );
  }
}

export default App;
