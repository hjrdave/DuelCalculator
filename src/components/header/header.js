import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { 
            sizeIcon: "fa-expand"
        };
    }
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
        this.setState({
            sizeIcon: "fa-compress-arrows-alt"
        })
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
        this.setState({
            sizeIcon: "fa-expand"
        })
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
            <p><i onClick={() => this.ToggleFullscreen() } class={"fas " + this.state.sizeIcon}></i></p>
        </div>
      </header>
    );
  }
}

export default Header;