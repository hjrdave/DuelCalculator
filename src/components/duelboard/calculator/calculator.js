import React, { Component } from 'react';
import Velocity from 'velocity-animate';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputs: []
    };
  }
  
  //accepts user input and adds to input array
  userInputs = (value, value2, value3) => {
    let cleanArray = [value, value2, value3].filter(function (el) { return el != null; });
    let inputArray = this.state.inputs.concat(cleanArray);
    this.setState({
      inputs: inputArray
    });
  }
 
  //deletes the last value in input array
  backspace = () => {
    this.state.inputs.pop(); 
    this.setState({
      inputs: [...this.state.inputs]
    });
   
  }

  //clears all values from input array
  clear = () => {
    this.state.inputs.splice(0,this.state.inputs.length);
    this.setState({
      inputs: [...this.state.inputs]
    });
  }

  mountEffect = () => {
    //player card animation
    Velocity(document.getElementById("CalculatorContainer"),{ opacity: [1,0], scale: [1, .9]},{duration:300,delay:100});
  }

  componentDidMount(){
    this.mountEffect();
  }

  render() {
    
    return (
      <div id="CalculatorContainer" className="row pt-4 pb-4 d-flex justify-content-around">
        <div className="col-8">
          <div className="row">
            <div className="col-8 d-flex justify-content-center">
              <div className="calc-numbers row d-flex justify-content-center">
                  <div className="calc-score col-12 pl-4 d-flex justify-content-start align-items-center">
                    <p>{this.props.lifepoints[this.props.playerNumber]} {this.props.operatorType} {this.state.inputs}</p>
                  </div>
                  <div onClick={ () => this.userInputs('1') } className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>1</p>
                  </div>
                  <div onClick={() => this.userInputs('2')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>2</p>
                  </div>
                  <div onClick={() => this.userInputs('3' )} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>3</p>
                  </div>
                  <div onClick={() => this.userInputs('4')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>4</p>
                  </div>
                  <div onClick={() => this.userInputs('5')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>5</p>
                  </div>
                  <div onClick={() => this.userInputs('6')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>6</p>
                  </div>
                  <div onClick={() => this.userInputs('7')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>7</p>
                  </div>
                  <div onClick={() => this.userInputs('8')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>8</p>
                  </div>
                  <div onClick={() => this.userInputs('9')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>9</p>
                  </div>
                  <div onClick={() => this.userInputs('0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>0</p>
                  </div>
                  <div onClick={() => this.userInputs('0','0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
                    <p>00</p>
                  </div>
                  <div onClick={() => this.userInputs('0','0','0')} className="col-3 p-3 d-flex justify-content-center align-items-center">
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
                  <div onClick={() => {this.props.calc(this.props.operatorType, this.props.playerNumber, this.state.inputs); this.props.handleView('mainboard')}} className="col-12 p-3 d-flex justify-content-center align-items-center">
                    <p>Enter</p>
                  </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-start">
            <div className="calc-numbers row d-flex justify-content-center">
              <div onClick = {() => {this.props.handleView('mainboard'); }} className="calc-close col-12 p-3 d-flex justify-content-center align-items-center">
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