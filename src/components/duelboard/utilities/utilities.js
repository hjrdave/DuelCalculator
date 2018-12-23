import React, { Component } from 'react';
import Cointoss from './cointoss/cointoss.js';

class Utilities extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toolView: "default"
    };
  }
  render() {
    if(this.props.name === 'cointoss'){
      return(
        <div id="UtilitiesContainer" className="row">
          <div className="col-12">
            <Cointoss />
          </div>
        </div>
      )
    }
    else if(this.props.name === 'dicethrow'){
      return(
        <div id="UtilitiesContainer" className="row">
          <div className="col-12">
            <p>dice</p>
          </div>
        </div>
      )
    }
    return (
      <div id="UtilitiesContainer" className="row">
        <div className="col-12">
          <div id="UtilityBar" className="row d-flex justify-content-center align-items-center">
            <div className="col-2 d-flex justify-content-center align-items-center p-4">
                <button onClick={() => this.props.handleView('utilities-coin')}><p><i className="far fa-copyright"></i></p></button>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center p-4">
                <button onClick={() => this.props.handleView('utilities-dice')}><p><i className="fas fa-dice-five"></i></p></button>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center p-4">
                <p><i class="fas fa-calculator"></i></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Utilities;