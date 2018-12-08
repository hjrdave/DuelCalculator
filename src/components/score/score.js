import React, { Component } from 'react';
import Calculator from './calculator/calculator.js';
import Players from './players/players.js';

class Score extends Component {
  constructor(props){
    super(props);
    this.state = { view: "scorecard" };
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
               <Players showCalculator = { this.showCalculator } playerAmount = {this.playerAmount}/>
            </div>
          );
      }
      if(this.state.view === "calculator"){
        return(
          <Calculator showScoreCard = { this.showScoreCard }/>
        );
      } 
      
    }
    
  }


export default Score;