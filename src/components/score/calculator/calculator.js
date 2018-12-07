import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
        <p onClick = { this.showScoreCard }>Calculator</p>
    );
  }
}

export default Calculator;