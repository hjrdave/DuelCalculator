import React, { Component } from 'react';
import Calculator from './calculator/calculator.js';
import Players from './players/players.js';

class Score extends Component {
  constructor(props){
    super(props);
    this.state = { 
      view: "scorecard",
      playerName: ["player 1","player 2"],
      lifepoints: [8000,8000],
      operatorType: "",
      playerNumber: 0
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
  
  handleCalcType = (value) => {
    this.setState({
      operatorType: value
    })
  }

  handlePlayerNumber = (value) => {
    this.setState({
      playerNumber: value
    })
  }
  
  calc = (value, i, inputs) => {
    let current = this.state.lifepoints[i];
    let inputed = parseInt(inputs.join(""));
    let mathType = value;
    let newScore = (mathType === "+") ? current + inputed : current - inputed;
    //alert(newScore);
    if(i === 0){
      this.setState({
        lifepoints: [newScore, this.state.lifepoints[1]]
      })
    }
    else if(i === 1){
      this.setState({
        lifepoints: [this.state.lifepoints[0], newScore]
      })
    }
  }
  
  

  render() {
    
      if(this.state.view === "scorecard"){
          return (
            <div className="row players-container pt-4 pb-4 d-flex justify-content-around">
               <Players 
                  showCalculator = { this.showCalculator } 
                  handleCalcType = {this.handleCalcType}
                  lifepoints = {this.state.lifepoints[0]}
                  players = {this.state.players}
                  playerName = {this.state.playerName[0]}
                  thisPlayerNumber = {0}
                  handlePlayerNumber = {this.handlePlayerNumber}
                  playerNumber = {this.state.playerNumber}
                />
                <Players 
                  showCalculator = { this.showCalculator } 
                  handleCalcType = {this.handleCalcType}
                  lifepoints = {this.state.lifepoints[1]}
                  players = {this.state.players}
                  playerName = {this.state.playerName[1]}
                  thisPlayerNumber = {1}
                  handlePlayerNumber = {this.handlePlayerNumber}
                  playerNumber = {this.state.playerNumber}
                />
            </div>
          );
      }
      if(this.state.view === "calculator"){
        return(
          <Calculator 
            showScoreCard = { this.showScoreCard }
            showCalculator = { this.showCalculator } 
            operatorType = { this.state.operatorType }
            handleCalcType = {this.handleCalcType}
            lifepoints = {this.state.lifepoints}
            playerName = {this.state.playerName}
            playerNumber = {this.state.playerNumber}
            calc = {this.calc}
          />
        );
      } 
    }
  }


export default Score;