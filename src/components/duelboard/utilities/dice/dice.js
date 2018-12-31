import React, { Component } from 'react';
import Velocity from 'velocity-animate';

class Dice extends Component {

    constructor(props){
        super(props);
        this.state = { 
            diceroll: "Roll the Dice!",
            dice: 'one'
        };
    }

    //handles the dice roll
    handleDiceRoll = () => {
            let value = ['one','two','three','four','five','six'];
            let time = 50;
            let diceAnimation = (x) => {
               setTimeout(()=>{this.setState({dice:value[0]})},time);
               setTimeout(()=>{this.setState({dice:value[1]})},time * 2);
               setTimeout(()=>{this.setState({dice:value[2]})},time * 3);
               setTimeout(()=>{this.setState({dice:value[3]})},time * 4);
               setTimeout(()=>{this.setState({dice:value[4]})},time * 5);
               setTimeout(()=>{this.setState({dice:value[5]})},time * 6);
               setTimeout(()=>{this.setState({dice:value[0]})},time * 7);
               setTimeout(()=>{this.setState({dice:value[1]})},time * 8);
               setTimeout(()=>{this.setState({dice:value[2]})},time * 9);
               setTimeout(()=>{this.setState({dice:value[3]})},time * 10);
               setTimeout(()=>{this.setState({dice:value[4]})},time * 11);
               setTimeout(()=>{this.setState({dice:value[5]})},time * 12);
               setTimeout(()=>{this.setState({dice:value[0]})},time * 13);
               setTimeout(()=>{this.setState({dice:value[1]})},time * 14);
               setTimeout(()=>{this.setState({dice:value[2]})},time * 15);
               setTimeout(()=>{this.setState({dice:value[3]})},time * 16);
               setTimeout(()=>{this.setState({dice:value[4]})},time * 17);
               setTimeout(()=>{this.setState({dice:value[5]})},time * 18);
               setTimeout(()=>{this.setState({dice:value[x - 1]})},time * 19);
            }
        let rollValue = Math.floor(Math.random() * 6) + 1;
        this.setState({
            diceroll: "You rolled a "  + rollValue + "!"
        },() => diceAnimation(rollValue));
        Velocity(document.getElementById('dice'),{translateY: '-=150px'},{duration: 475, easing:'easeOutExpo'});
        Velocity(document.getElementById('dice'),{translateY: '+= 150px'},{duration: 475, easing:[500,21]});
        //Velocity(document.getElementById('dice'),{translateY: '-100px'},{duration: 475});
    }   
    
   
  render() {
    return (
        <div id="DiceContainer" className="row mt-4 pt-4 d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                        <p><i id="dice" className={"fas fa-dice-" + this.state.dice}></i></p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="mt-4 col-8 d-flex justify-content-center">
              <div className="dice-controls row d-flex justify-content-center">
                  <div onClick = {() => this.handleDiceRoll()} className="col-6 d-flex justify-content-center align-items-center">
                    <p>ROLL</p>
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

export default Dice;