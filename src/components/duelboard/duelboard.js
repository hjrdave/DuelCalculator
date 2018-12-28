import React, { Component } from 'react';
import Velocity from 'velocity-animate';
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
      lifepointsPrev: [0,0],
      operatorType: "",
      playerNumber: 0,
      introAnimate: true
    };
  }

  //handles DuelBoard's view states
  handleView = (value) => {
    this.setState({
      view: value,
      lifepointsPrev: [this.state.lifepoints[0], this.state.lifepoints[1]]
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
  //also sets the previous lifepoint score for animation purposes
  calc = (value, i, inputs) => {
    let current = this.state.lifepoints[i];
    let inputed = (parseInt(inputs.join(""))) ? parseInt(inputs.join("")) : 0;
    let mathType = value;
    let newScore = (mathType === "+") ? current + inputed : current - inputed;
    newScore = (newScore >= 0) ? newScore : 0;
    if(i === 0){
      this.setState({
        lifepoints: [newScore, this.state.lifepoints[1]],
        lifepointsPrev: [current, this.state.lifepoints[1]]
      })
    }
    else if(i === 1){
      this.setState({
        lifepoints: [this.state.lifepoints[0], newScore],
        lifepointsPrev: [this.state.lifepoints[0], current]
      })
    }
    else if(value === "none"){
      this.setState({
        lifepointsPrev: [this.state.lifepoints[0], this.state.lifepoints[1]]
      })
    }
  }

  //reset dualboard
  reset = () => {
    this.setState({
      lifepoints: [8000, 8000]
    })
  }

  //intro animation for app onload and app reset
  resetEffect = () => {
      //player card animation
      Velocity(document.getElementsByClassName("player")[0],{ opacity: [1,0], scale: [1, 2]},{duration:500,delay:200});
      Velocity(document.getElementsByClassName("player")[1],{ opacity: [1,0], scale: [1, 2]},{duration:500,delay:400});

      //utility bar animation
      Velocity(document.getElementById("UtilityBar"),{ opacity: [1,0], scale: [1, 2]},{duration:500,delay:800});
      //Velocity(document.getElementsByClassName("fa-copyright fa-dice-five fa-redo"),{ opacity: [1,0], scale: [1, 2]},{duration:500,delay:800});
  }
  mountEffect = () => {
    //player card animation
    Velocity(document.getElementsByClassName("player")[0],{ opacity: [1,0], scale: [1, .9]},{duration:400,delay:100});
    Velocity(document.getElementsByClassName("player")[1],{ opacity: [1,0], scale: [1, .9]},{duration:400,delay:100});

    //utility bar animation
    Velocity(document.getElementById("UtilityBar"),{ opacity: [1,0], scale: [1, 1]},{duration:400,delay:300});
    
  }
  
  componentDidMount(){
    
    this.resetEffect();
    
  }
  componentDidUpdate(){
    if(this.state.introAnimate === true){
      this.resetEffect();
      this.setState({introAnimate: false});
    }
    else if(this.state.introAnimate === false){
      this.mountEffect()
    }
  }
  

  

  render() {
      if(this.state.view === "mainboard"){
          return (
            <div id="DuelBoardContainer" refs="block" className="row d-flex align-items-end">
              <div className="col-12">
                <div className="row d-flex justify-content-around">
                    <Players 
                      handleCalcType = {this.handleCalcType}
                      lifepoints = {this.state.lifepoints[0]}
                      lifepointsPrev = {this.state.lifepointsPrev[0]}
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
                      lifepointsPrev = {this.state.lifepointsPrev[1]}
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
              reset = {this.reset}
              lifepointsPrev = {this.state.lifepointsPrev}
              />
            </div>
          </div>
        );
      }  
    }
  }


export default Duelboard;