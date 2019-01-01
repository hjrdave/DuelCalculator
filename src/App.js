import React, { Component } from 'react';
import Particles from 'react-particles-js';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/header/header.js';
import Duelboard from './components/duelboard/duelboard.js';
import Footer from './components/footer/footer.js';


//library.add(fab, faCheckSquare, faCoffee);


class App extends Component {
 


  handleView = () => {

  }

  render() {
    return (
      <div className="container-fluid app-container">
        <Particles 
        className="particles"
        params={{
          "particles": {
              "number": {
                  "value": 100,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.02
              },
              "move": {
                  "direction": "right",
                  "speed": 0.30
              },
              "size": {
                  "value": 1.5
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.05
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
      }}
        />
        <Header />
        <Duelboard />
        <Footer />
      </div>
    );
  }
}

export default App;
