import React, { Component } from 'react';
import Calculator from './calculator/calculator.js';
import Players from './players/players.js';

class Score extends Component {
  constructor(props){
    super(props);
    this.state = { view: "scorecard" };
    this.lifepoints = { points: 8000};
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

  render() {
    
      if(this.state.view === "scorecard"){
          return (
            <div className="row players-container pt-4 pb-4 d-flex justify-content-around">
               <Players 
                showCalculator = { this.showCalculator } 
                playerAmount = { this.playerAmount }
                lifepoints = { this.lifepoints.points }
               />
            </div>
          );
      }
      if(this.state.view === "calculator"){
        return(
          <Calculator 
            showScoreCard = { this.showScoreCard }
            lifepoints = { this.lifepoints.points }
          />
        );
      } 
      
    }
    
  }


export default Score;