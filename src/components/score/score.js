import React, { Component } from 'react';
import Calculator from './calculator/calculator.js';
import Players from './players/players.js';

class Score extends Component {
  constructor(props){
    super(props);
    this.state = { 
      view: "scorecard",
      points: 8000,
      mathType: ""
    };
    //this.lifepoints = { points: 8000};
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
  playerAmount = () =>{
    this.prop({
      count: 2
    })
  }
  playerScore = (value) =>{
    this.setState({
        points: value
      })
  }
  calcType = (value) =>{
    this.setState({
      mathType: value
    })
  }

  render() {
    
      if(this.state.view === "scorecard"){
          return (
            <div className="row players-container pt-4 pb-4 d-flex justify-content-around">
               <Players 
                showCalculator = { this.showCalculator } 
                playerAmount = { this.playerAmount }
               lifepoints = { this.state.points }
               calcType = {this.calcType}
               />
            </div>
          );
      }
      if(this.state.view === "calculator"){
        return(
          <Calculator 
            showScoreCard = { this.showScoreCard }
            showCalculator = { this.showCalculator } 
            lifepoints = { this.state.points }
            playerScore = { this.playerScore }
            mathType = { this.state.mathType }
            calcType = {this.calcType}
          />
        );
      } 
      
    }
    
  }


export default Score;