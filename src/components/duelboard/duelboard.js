import React, { Component } from 'react';
import Calculator from './calculator/calculator.js';
import Players from './players/players.js';
import Utilities from './utilities/utilities.js';

class Duelboard extends Component {
  constructor(props){
    super(props);
    this.state = { 
      view: "mainboard",
      playerName: ["player 1","player 2"],
      lifepoints: [8000,8000],
      operatorType: "",
      playerNumber: 0
    };
  }

  //handles DuelBoard's view states
  handleView = (value) => {
    this.setState({
      view: value
    });
  }
  
  //sets the operator type for lifepoint calculator
  handleCalcType = (value) => {
    this.setState({
      operatorType: value
    })
  }

  //handles the array position for players
  handlePlayerNumber = (value) => {
    this.setState({
      playerNumber: value
    })
  }
  
  //calculates lifepoints based off of lifepoint calculator user input
  calc = (value, i, inputs) => {
    let current = this.state.lifepoints[i];
    let inputed = (parseInt(inputs.join(""))) ? parseInt(inputs.join("")) : 0;
    let mathType = value;
    let newScore = (mathType === "+") ? current + inputed : current - inputed;
    newScore = (newScore >= 0) ? newScore : 0;
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

  //reset dualboard
  reset = () => {
    this.setState({
      lifepoints: [8000, 8000]
    })
  }
  
  render() {
      if(this.state.view === "mainboard"){
          return (
            <div id="DuelBoardContainer" className="row d-flex align-items-end">
              <div className="col-12">
                <div className="row d-flex justify-content-around">
                    <Players 
                      handleCalcType = {this.handleCalcType}
                      lifepoints = {this.state.lifepoints[0]}
                      players = {this.state.players}
                      playerName = {this.state.playerName[0]}
                      thisPlayerNumber = {0}
                      handlePlayerNumber = {this.handlePlayerNumber}
                      playerNumber = {this.state.playerNumber}
                      handleView = {this.handleView}
                    />
                    <Players 
                      handleCalcType = {this.handleCalcType}
                      lifepoints = {this.state.lifepoints[1]}
                      players = {this.state.players}
                      playerName = {this.state.playerName[1]}
                      thisPlayerNumber = {1}
                      handlePlayerNumber = {this.handlePlayerNumber}
                      playerNumber = {this.state.playerNumber}
                      handleView = {this.handleView}
                    />
                </div>
              </div>
              <div className="col-12">
                  <Utilities 
                    handleView = {this.handleView}
                    reset = {this.reset}
                  />
              </div>
            </div>
          );
      }
      else if(this.state.view === "calculator"){
        return(
          <div id="DuelBoardContainer" className="row d-flex align-items-center">
              <div className="col-12">
                <Calculator 
                  operatorType = { this.state.operatorType }
                  handleCalcType = {this.handleCalcType}
                  lifepoints = {this.state.lifepoints}
                  playerName = {this.state.playerName}
                  playerNumber = {this.state.playerNumber}
                  calc = {this.calc}
                  handleView = {this.handleView}
                />
              </div>
            </div>
        );
      } 
      else if(this.state.view === "utilities-coin"){
        return(
          <div id="DuelBoardContainer" className="row d-flex align-items-center">
            <div className="col-12">
              <Utilities 
                name = {"cointoss"} 
                handleView = {this.handleView}
              />
            </div>
          </div>
        );
      }
      else if(this.state.view === "utilities-dice"){
        return(
          <div id="DuelBoardContainer" className="row d-flex align-items-center">
            <div className="col-12">
              <Utilities 
              name = {"dicethrow"} 
              handleView = {this.handleView}
              />
            </div>
          </div>
        );
      }
      else if(this.state.view === "utilities-reset"){
        return(
          <div id="DuelBoardContainer" className="row d-flex align-items-center">
            <div className="col-12">
              <Utilities 
              name = {"reset"} 
              handleView = {this.handleView}
              />
            </div>
          </div>
        );
      }  
    }
  }


export default Duelboard;