import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import Utilitybar from './utilitybar/utilitybar.js';
import Cointoss from './cointoss/cointoss.js';
import Dice from './dice/dice.js';
import Reset from './reset/reset.js';

class Utilities extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toolView: "default"
    };
  }

  mountEffect = () => {
    //player card animation
    Velocity(document.getElementById("UtilitiesContainer"),{ opacity: [1,0], scale: [1, .9]},{duration:300,delay:100});
  }

  componentDidMount(){
    this.mountEffect();
  }

  render() {
    if(this.props.name === 'cointoss'){
      return(
        <div id="UtilitiesContainer" className="row d-flex align-items-center">
          <div className="col-12">
            <Cointoss 
              handleView = {this.props.handleView}
            />
          </div>
        </div>
      )
    }
    else if(this.props.name === 'dicethrow'){
      return(
        <div id="UtilitiesContainer" className="row d-flex align-items-center">
          <div className="col-12">
            <Dice 
              handleView = {this.props.handleView}
            />
          </div>
        </div>
      )
    }
    else if(this.props.name === 'reset'){
      return (
        <div id="UtilitiesContainer" className="row">
          <div className="col-12">
            <Reset
              handleView = {this.props.handleView}
              reset = {this.props.reset}
              lifepointsPrev = {this.props.lifepointsPrev}
            />
          </div>
        </div>
      );
    }
    
      return (
        <div id="UtilitiesContainer" className="row">
          <div className="col-12">
            <Utilitybar 
              handleView = {this.props.handleView}
            />
          </div>
        </div>
      );
    
    
  }
}

export default Utilities;