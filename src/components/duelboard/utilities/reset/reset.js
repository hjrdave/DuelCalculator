import React, { Component } from 'react';

class Reset extends Component {

      
  render() {
    return (
        <div id="ResetContainer" className="row mt-4 pt-4 d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                    
                    <div className="mt-4 pt-4 col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                            <p>Are you sure?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 col-8 d-flex justify-content-center">
              <div className="reset-controls row d-flex justify-content-center">
                  
                  <div onClick = {() => this.handleDiceRoll()} className="col-6 d-flex justify-content-center align-items-center">
                    <p>Reset</p>
                  </div>
                  
                  <div onClick = {() => this.props.handleView('mainboard')} className="col-6 d-flex justify-content-center align-items-center">
                    <p>Cancel</p>
                  </div>
              </div>
            </div>
        </div>
    
    );
  }
}

export default Reset;