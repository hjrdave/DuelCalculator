import React, { Component } from 'react';
import Velocity from 'velocity-animate';

class Reset extends Component {
//Handles UI Animations
componentDidMount(){
    Velocity(document.getElementById("ResetContainer"),{ opacity: [1,0], scale: [1, .9]},{duration:300,delay:100});
  }
      
  render() {
    return (
        <div id="ResetContainer" className="row d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                <div className="col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                        <p><i class="fas fa-redo"></i></p>
                        </div>
                    </div>
                
                    <div className="mt-4 pt-4 col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                            <p>Are you sure you want to reset?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-8 d-flex justify-content-center">
              <div className="reset-controls row d-flex justify-content-center">
                  
                  <div onClick = {() => {this.props.reset(); this.props.handleView('mainboard'); this.setState({lifepointsPrev: [8000,8000],AnimationState: "reset"})}} className="col-6 d-flex justify-content-center align-items-center">
                    <p>Yes</p>
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