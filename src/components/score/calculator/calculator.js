import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputs: []
    };
  }
  
  userInputs = (value) => {
    this.setState({inputs: [...this.state.inputs, value]});
  }
 
  backspace = () => {
    this.state.inputs.pop(); 
    this.setState({inputs: [...this.state.inputs]});
  }
  clear = () => {
    this.state.inputs.splice(0,this.state.inputs.length);
    this.setState({inputs: [...this.state.inputs]});
  }

  calc = (value, i) => {
    let current = this.props.lifepoints[i];
    let inputed = parseInt(this.state.inputs.join(""));
    let mathType = value;
    let newScore = (mathType === "+") ? current + inputed : current - inputed;
    this.setState({
      lifepoints: newScore
    })
    //this.props.playerScore(newScore);
  }

  render() {
    
    return (
      <div id="calculator-container" className="row pt-4 pb-4 d-flex justify-content-around">
        <div className="col-6">
          <div className="row">
            <div className="col-8 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  <div className="calc-score col-12 pl-4 d-flex justify-content-start align-items-center">
                  <p>{() => {let value = this.props.playerNumber; return this.props.lifepoints[value]}} {this.props.mathType} {this.state.inputs}</p>
                  </div>
                  <div data-input-value="1"  onClick={ () => this.userInputs('1') } className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>1</p>
                  </div>
                  <div data-input-value="2"  onClick={() => this.userInputs('2')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>2</p>
                  </div>
                  <div data-input-value="3"  onClick={() => this.userInputs('3')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>3</p>
                  </div>
                  <div data-input-value="4" onClick={() => this.userInputs('4')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>4</p>
                  </div>
                  <div data-input-value="5" onClick={() => this.userInputs('5')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>5</p>
                  </div>
                  <div data-input-value="6" onClick={() => this.userInputs('6')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>6</p>
                  </div>
                  <div data-input-value="7" onClick={() => this.userInputs('7')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>7</p>
                  </div>
                  <div data-input-value="8" onClick={() => this.userInputs('8')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>8</p>
                  </div>
                  <div data-input-value="9" onClick={() => this.userInputs('9')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>9</p>
                  </div>
                  <div data-input-value="0" onClick={() => this.userInputs('0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>0</p>
                  </div>
                  <div data-input-value="00"  onClick={() => this.userInputs('00')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>00</p>
                  </div>
                  <div data-input-value="000"  onClick={() => this.userInputs('000')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>000</p>
                  </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  <div onClick={() => this.backspace()}  className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p><i class="fas fa-backspace"></i></p>
                  </div>
                  <div onClick={() => this.clear()} className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p>Clear</p>
                  </div>
                  <div onClick={() => {this.calc(this.props.mathType, this.props.playerNumber); this.props.showScoreCard()}} className="col-12 p-3 d-flex justify-content-center align-items-center">
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