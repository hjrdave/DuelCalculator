import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="row d-flex justify-content-center align-self-end">
        <div className="col-8 d-flex justify-content-center align-items-center">
            <p className="p-3"><a href="https://mediafish.io" rel="noopener noreferrer" target="_blank">Created by mediafish.io</a></p>
        </div>
      </footer>
      
    );
  }
}

export default Footer;