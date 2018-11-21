import React, { Component } from 'react';

class Utilities extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center align-items-center utilitybar">
        <div className="col-2 d-flex justify-content-center align-items-center p-4">
            <p><i className="far fa-copyright"></i></p>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center p-4">
            <p><i className="fas fa-dice-five"></i></p>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center p-4">
            <p><i class="fas fa-calculator"></i></p>
        </div>
      </div>
    );
  }
}

export default Utilities;