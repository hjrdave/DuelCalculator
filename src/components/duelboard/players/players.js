import React, { Component } from 'react';



class Players extends Component {
  
  
  render() {
      return (
        <div className="player col-4 glow">
          <div className="row">
            <div className="col-12 playername pt-3 d-flex justify-content-between">
                  <p className="pl-2">
                    <i onClick = { () => {this.props.handleView('calculator'); this.props.handleCalcType('+'); this.props.handlePlayerNumber(this.props.thisPlayerNumber)} } className="fas fa-plus"></i>
                  </p>
                  <p>{this.props.playerName}</p>
                  <p className="pr-2">
                    <i onClick = { () => {this.props.handleView('calculator'); this.props.handleCalcType('-'); this.props.handlePlayerNumber(this.props.thisPlayerNumber)} } className="fas fa-minus"></i>
                  </p>
            </div>
            <div className="playercard col-12 d-flex justify-content-center">
              <p>{this.props.lifepoints}</p>
            </div>
          </div>
      </div>
      );
    }
  }


export default Players;










