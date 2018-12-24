import React, { Component } from 'react';

class Cointoss extends Component {
  render() {
    return (
        <div id="CointossContainer" className="row pt-4 pb-4 d-flex justify-content-center">
            <div className="col-8">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                        <p><i className="far fa-copyright"></i></p>
                        </div>
                    </div>
                    <div className="mt-4 col-12 d-flex justify-content-center">
                        <div className="d-flex align-items-end">
                            <div className="btn btn-primary">TOSS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
  }
}

export default Cointoss;