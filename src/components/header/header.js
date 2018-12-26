import React, { Component } from 'react';

class Header extends Component {

  ToggleFullscreen = () => {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

  render() {
    return (
      <header className="row d-flex justify-content-between align-self-start">
        <div className="col-2 pt-4 d-flex justify-content-start">
            <p><i onClick={() => alert('sorry, settings are not set up yet')} class="fas fa-cog"></i></p>
        </div>
        <div className="col-3 pt-4 d-flex justify-content-center">
            <h4>DuelCalculator.js</h4>
        </div>
        <div className="col-2 pt-4 d-flex justify-content-end">
            <p><i onClick={() => this.ToggleFullscreen() } class="fas fa-expand"></i></p>
        </div>
      </header>
    );
  }
}

export default Header;