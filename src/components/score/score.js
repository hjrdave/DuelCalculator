import React, { Component } from 'react';
import Calculator from './calculator/calculator.js';
import Players from './players/players.js';

class Score extends Component {
  constructor(props){
    super(props);
    this.state = { 
      view: "scorecard",
      mathType: "",
      playerName: ["player 1","player 2"],
      lifepoints: [8000,7000]
    };
  }

  showCalculator = () => {
    this.setState({
      view: "calculator"
    });
  }

  showScoreCard = () => {
    this.setState({
      view: "scorecard"
    });
  }
  
  calcType = (value) =>{
    this.setState({
      mathType: value
    })
  }

  playerNumber = (value) => {
    let playerNumber = value;
    return playerNumber;
  }

  render() {
    
      if(this.state.view === "scorecard"){
          return (
            <div className="row players-container pt-4 pb-4 d-flex justify-content-around">
               <Players 
                  showCalculator = { this.showCalculator } 
                  calcType = {this.calcType}
                  lifepoints = {this.state.lifepoints[0]}
                  players = {this.state.players}
                  playerName = {this.state.playerName[0]}
                  playerNumber = {this.playerNumber(0)}
                />
                <Players 
                  showCalculator = { this.showCalculator } 
                  calcType = {this.calcType}
                  lifepoints = {this.state.lifepoints[1]}
                  players = {this.state.players}
                  playerName = {this.state.playerName[1]}
                  playerNumber = {this.playerNumber(1)}
                />
            </div>
          );
      }
      if(this.state.view === "calculator"){
        return(
          <Calculator 
            showScoreCard = { this.showScoreCard }
            showCalculator = { this.showCalculator } 
            mathType = { this.state.mathType }
            calcType = {this.calcType}
            lifepoints = {this.state.lifepoints}
            playerName = {this.state.playerName}
          />
        );
      } 
      
    }
    
  }


export default Score;