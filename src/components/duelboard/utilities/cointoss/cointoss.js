import React, { Component } from 'react';
import Velocity from 'velocity-animate';

class Cointoss extends Component {

    constructor(props){
        super(props);
        this.state = { 
            cointoss: "Heads or Tails?",
            coinface: "HEAD"
        };
    }

  //handles the coin toss
  handleCoinToss = () => {
    let tossValue = (Math.floor(Math.random() * 2) === 0) ? 'HEADS' : 'TAILS';
    let cointoss = () => {
        Velocity(document.getElementsByClassName('coin-circle'),{rotateX: ['360deg','0deg']},{duration: 800});
        //Velocity(document.getElementsByClassName('coin-circle'),{rotateX: ['0deg','360deg']},{duration: 400});
    }
    let coinface = () => {
        let value = ["TAILS","HEADS"];
        setTimeout(()=>{this.setState({coinface:value[0]})},50);
        setTimeout(()=>{this.setState({coinface:value[1]})},50 * 2);
        setTimeout(()=>{this.setState({coinface:value[0]})},50 * 3);
        setTimeout(()=>{this.setState({coinface:tossValue})},50 * 4);
    }
    
    this.setState({
        cointoss: tossValue + " Wins!"
    },() => {cointoss();coinface()});
    Velocity(document.getElementsByClassName('coin-circle-container'),{translateY: '-=150px'},{duration: 400, easing:'easeOutExpo'});
    Velocity(document.getElementsByClassName('coin-circle-container'),{translateY: '+= 150px'},{duration: 400,easing:'easeInExpo'});
  }  

  render() {
    return (
        <div id="CointossContainer" className="row mt-4 pt-4 d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="coin-circle-container d-flex align-items-end">
                            <div className="coin-circle d-flex justify-content-center align-items-center"><p className="d-flex justify-content-center align-items-center">{this.state.coinface}</p></div>
                        </div>
                    </div>
                    {/* <div className="mt-4 col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                            <p>{this.state.cointoss}</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="mt-4 col-8 d-flex justify-content-center">
              <div className="coin-controls row d-flex justify-content-center">
                  <div onClick = {() => this.handleCoinToss()} className="col-6 d-flex justify-content-center align-items-center">
                    <p>TOSS</p>
                  </div>
                  <div onClick = {() => this.props.handleView('mainboard')} className="col-6 d-flex justify-content-center align-items-center">
                    <p>CLOSE</p>
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Cointoss;