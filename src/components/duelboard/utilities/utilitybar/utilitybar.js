import React, { Component } from 'react';

class Utilitybar extends Component {
  
  render() {
      return(
        <div id="UtilityBar" className="row d-flex justify-content-center align-items-center">
            <div className="col-2 d-flex justify-content-center align-items-center p-4">
                <div onClick={() => this.props.handleView('utilities-coin')}><p className="mb-0"><i className="far fa-copyright"></i></p></div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center p-4">
                <div onClick={() => this.props.handleView('utilities-dice')}><p className="mb-0"><i className="fas fa-dice-five"></i></p></div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center p-4">
                <div onClick={() => this.props.handleView('utilities-reset')}><p className="mb-0"><i class="fas fa-redo"></i></p></div>
            </div>
        </div>
      )
  }
}

export default Utilitybar;