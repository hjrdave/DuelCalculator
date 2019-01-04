import React, { Component } from 'react';
import Toggleswitch from './../ui/toggleswitch/toggleswitch';

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
            <div className="pt-2 row">
              <div className="col-12">
                <Toggleswitch inputID = {"audio"} icon = {"fa-volume-up"} />
                <div onClick={() => {this.props.handleAboutApp(true); this.props.handleSettings('Closed')}} className="d-flex align-items-center">
                  <h4><i class="fas fa-info-circle pr-2"></i></h4>
                  <h4>About</h4>
                </div>
              </div>
            </div>
        </div>
          
      </div>
    );
  }
}

export default Settings;