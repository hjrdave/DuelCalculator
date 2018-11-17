import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="row d-flex justify-content-center">
        <div className="col-8 pt-4 d-flex justify-content-center">
            <h1>Duel Calculator</h1>
        </div>
      </header>
    );
  }
}

export default Header;