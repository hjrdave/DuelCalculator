import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Velocity from 'velocity-animate';
import './App.scss';
import Settings from './components/settings/settings.js';
import Header from './components/header/header.js';
import Duelboard from './components/duelboard/duelboard.js';
import About from './components/about/about.js';
//import Footer from './components/footer/footer.js';


class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            SettingsState: "Closed",
            AnimationState: "default",
            AboutApp: false
        };
    }

    //Handles setting state and animations
    handleSettings = () => {
        if(this.state.SettingsState === "Closed"){
           Velocity(
               document.getElementById('SettingsContainer'),{
                   translateX: ['+=30vw','-30vw']},{
                   duration: 100,
                   easing: "easeOutQuart", 
                   complete: () => {
                    this.setState({
                        SettingsState: "Open",
                        AnimationState: "none"
                    })
                   }});
            
        }
        else{
            Velocity(
                document.getElementById('SettingsContainer'),{
                    translateX: '-=30vw'},{
                    duration: 100,
                    easing: "easeOutQuart", 
                    complete:() => {
                        this.setState({
                            SettingsState: "Closed"
                            //AnimationState: "default"
                        })
                    }});
        }
    }
    
    handleAnimationState = (value) => {
        this.setState({
            AnimationState: value
        })
    }

    handleAboutApp = (value) => {
        this.setState({
            AboutApp: value
        })
    }
  
  render() {
    if(this.state.AboutApp === false){
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
              <Settings 
                  handleSettings={this.handleSettings} 
                  AnimationState={this.state.AnimationState}
                  handleAboutApp={this.handleAboutApp}
              />
              <Header handleSettings={this.handleSettings} AnimationState={this.state.AnimationState} />
              
              <Duelboard handleAnimationState={this.handleAnimationState} AnimationState={this.state.AnimationState}/>
              
              {/* <Footer /> */}
            </div>
          );
    }
    else if(this.state.AboutApp === true){
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
              <Settings 
                  handleSettings={this.handleSettings} 
                  AnimationState={this.state.AnimationState}
                  handleAboutApp={this.handleAboutApp}
              />
              <Header handleSettings={this.handleSettings} AnimationState={this.state.AnimationState} />
              <About handleSettings={this.handleSettings} />
            </div>
          );
    }
  }
}

export default App;
