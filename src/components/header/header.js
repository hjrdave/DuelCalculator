import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="row align-self-start">
        <div className="col-4 pt-4 d-flex justify-content-start">
            <p>DuelCalculator.js</p>
        </div>
        <div className="col-8 pt-4 d-flex justify-content-end">
            <p><i className="fas fa-cog"></i></p>
        </div>
      </header>
    );
  }
}

export default Header;