import React, { Component } from 'react';
import Utilitybar from './utilitybar/utilitybar.js';
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
          <Utilitybar 
            handleView = {this.props.handleView}
          />
        </div>
      </div>
    );
  }
}

export default Utilities;