import React from "react";

const useHeader = () => {
  interface IDocument {
    exitFullscreen?: any;
    mozCancelFullScreen?: any;
    webkitExitFullscreen?: any;
    fullscreenElement?: any;
    mozFullScreenElement?: any;
    webkitFullscreenElement?: any;
    msFullscreenElement?: any;
    documentElement?: any;
    msExitFullscreen?: any;
  }
  //'fa-expand'
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const toggleFullscreen = () => {
    const doc: IDocument = document;
    const isInFullScreen =
      (doc.fullscreenElement && doc.fullscreenElement !== null) ||
      (doc.webkitFullscreenElement && doc.webkitFullscreenElement !== null) ||
      (doc.mozFullScreenElement && doc.mozFullScreenElement !== null) ||
      (doc.msFullscreenElement && doc.msFullscreenElement !== null);

    const docElm = doc.documentElement;
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
      setIsFullScreen(true);
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };
  return {
    toggleFullscreen,
    isFullScreen,
  };
};

export default useHeader;
