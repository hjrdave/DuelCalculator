import React, { Component } from 'react';


class Toggleswitch extends Component {
 
  
  render() {
    return (
      <div className="switchtoggle d-flex align-items-center p-3">
        <input type="checkbox" id={this.props.inputID} /><label for={this.props.inputID}>Toggle</label>
        <i className={"pl-3 pr-2 fas " + this.props.icon}></i>
        <p>Beta</p>
      </div>
    );
  }
}

export default Toggleswitch;