import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="row">
        <div className="col-4 pt-4 d-flex justify-content-start">
            <p>Duel Calculator</p>
        </div>
        <div className="col-8 pt-4 d-flex justify-content-end">
            <p><i class="fas fa-cog"></i></p>
        </div>
      </header>
    );
  }
}

export default Header;