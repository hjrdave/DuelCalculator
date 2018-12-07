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

  render() {
    
      if(this.state.view === "scorecard"){
        return (
          <Players showCalculator = { this.showCalculator }/>
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