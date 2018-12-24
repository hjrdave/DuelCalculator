import React, { Component } from 'react';

class Dice extends Component {
  render() {
    return (
        <div id="DiceContainer" className="row mt-4 pt-4 d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                        <p><i className="fas fa-dice-five"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 col-8 d-flex justify-content-center">
              <div className="dice-controls row d-flex justify-content-center">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <p>+</p>
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center">
                    <p>ROLL</p>
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <p>-</p>
                  </div>
                  <div onClick = {() => this.props.handleView('mainboard')} className="col-12 d-flex justify-content-center align-items-center">
                    <p><i class="fas fa-times"></i></p>
                  </div>
              </div>
            </div>
        </div>
    
    );
  }
}

export default Dice;