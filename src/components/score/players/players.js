import React, { Component } from 'react';

class Players extends Component {
  render() {
    return (
        <div className="row players-container pt-4 pb-4 d-flex justify-content-around">
        <div id="PlayerOne" className="col-4 glow">
          <div className="row">
            <div className="col-12 playername pt-3 d-flex justify-content-between">
                  <p className="pl-2"><i onClick = { this.props.showCalculator } className="fas fa-plus"></i></p>
                  <p>Player One</p>
                  <p className="pr-2"><i onClick = { this.props.showCalculator } className="fas fa-minus"></i></p>
            </div>
            <div className="col-12 playercard d-flex justify-content-center">
              <p>8000</p>
            </div>
          </div>
        </div>
        <div id="PlayerTwo" className="col-4 glow">
          <div className="row">
            <div className="col-12 playername pt-3 d-flex justify-content-between">
                <p className="pl-2"><i onClick = { this.props.showCalculator } className="fas fa-plus"></i></p>
                <p>Player Two</p>
                <p className="pr-2"><i onClick = { this.props.showCalculator } className="fas fa-minus"></i></p>
            </div>
            <div className="col-12 playercard d-flex justify-content-center">
              <p>8000</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Players;










