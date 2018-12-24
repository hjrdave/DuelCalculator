import React, { Component } from 'react';

class Dice extends Component {
  render() {
    return (
        <div id="DiceContainer" className="row pt-4 pb-4 d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                        <p><i className="fas fa-dice-five"></i></p>
                        </div>
                    </div>
                    <div className="mt-4 col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                            <div className="btn btn-primary">Roll</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
  }
}

export default Dice;