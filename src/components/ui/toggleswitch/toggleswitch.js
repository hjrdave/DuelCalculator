import React, { Component } from 'react';


class Toggleswitch extends Component {
 
  
  render() {
    return (
    <div className="switchtoggle">
        <input type="checkbox" id={this.props.inputID} /><label for={this.props.inputID}>Toggle</label>
      </div>
    );
  }
}

export default Toggleswitch;