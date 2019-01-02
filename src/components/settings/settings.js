import React, { Component } from 'react';

class Settings extends Component {
    
  
  render() {
    return (
      <div id="SettingsContainer">
        <div className="col-12">
            <div className="row">
                <div className="col-6 pt-4 d-flex justify-content-start">
                    <h3>Settings</h3>
                </div>
                <div className="col-6 pt-4 d-flex justify-content-end align-items-center">
                    <p className="closeIcon"><i onClick={() => {this.setState({AnimationState: "default"}); this.props.handleSettings() }} className="fas fa-times"></i></p>
                </div>
            </div>
        </div>
          
      </div>
    );
  }
}

export default Settings;