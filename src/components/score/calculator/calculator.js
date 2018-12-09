import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      userInput: 0
    };
  }
  

  userInputArray = (value) => {
    const inputArray = [];   
    inputArray.push(value);   
    this.setState({
      userInput:inputArray
    })
    
  }

  

  render() {
    
    return (
      <div id="calculator-container" className="row pt-4 pb-4 d-flex justify-content-around">
        <div className="col-6">
          <div className="row">
            <div className="col-8 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  <div className="calc-score col-12 pl-4 d-flex justify-content-start align-items-center">
                    <p>{this.props.lifepoints} - {this.state.userInput}</p>
                  </div>
                  <div data-input-value="1"  onClick={() => this.userInputArray(1)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>1</p>
                  </div>
                  <div data-input-value="2"  onClick={() => this.userInputArray(2)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>2</p>
                  </div>
                  <div data-input-value="3"  onClick={() => this.userInputArray(3)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>3</p>
                  </div>
                  <div data-input-value="4" onClick={() => this.userInputArray(4)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>4</p>
                  </div>
                  <div data-input-value="5" onClick={() => this.userInputArray(5)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>5</p>
                  </div>
                  <div data-input-value="6" onClick={() => this.userInputArray(6)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>6</p>
                  </div>
                  <div data-input-value="7" onClick={() => this.userInputArray(7)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>7</p>
                  </div>
                  <div data-input-value="8" onClick={() => this.userInputArray(8)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>8</p>
                  </div>
                  <div data-input-value="9" onClick={() => this.userInputArray(9)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>9</p>
                  </div>
                  <div data-input-value="0" onClick={() => this.userInputArray(0)} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>0</p>
                  </div>
                  <div data-input-value="00"  className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>00</p>
                  </div>
                  <div data-input-value="000"  className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>000</p>
                  </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  <div className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p><i class="fas fa-backspace"></i></p>
                  </div>
                  <div className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p>Clear</p>
                  </div>
                  <div className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p>Enter</p>
                  </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
            <div className="calc-numbers row d-flex justify-content-center">
              <div onClick = {this.props.showScoreCard} className="calc-close col-12 p-3 d-flex justify-content-center align-items-center">
                <p><i class="fas fa-times"></i></p>
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