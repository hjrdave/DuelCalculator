import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div id="calculator-container" onClick = {this.props.showScoreCard} className="row pt-4 pb-4 d-flex justify-content-around">
        <div className="col-6">
          <div className="row">
            <div className="col-10 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  <div className="calc-score col-12 d-flex justify-content-center align-items-center">
                    <p>8000 - </p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>1</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>2</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>3</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>4</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>5</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>6</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>7</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>8</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>9</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>0</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>00</p>
                  </div>
                  <div className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>000</p>
                  </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  
                  <div className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p>Clear</p>
                  </div>
                  <div className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p>Enter</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;