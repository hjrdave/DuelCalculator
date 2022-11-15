import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './common/Header';
import Backdrop from './common/Backdrop';
import Particles from './common/Particles';
import StartUp from './StartUp';
import Treble from 'treble-gsm';

import Store from './Store';


const App: React.FC = () => {
  return (
    <Treble store={Store}>
      <div className="App">
        <div className='d-flex'>
          <Router basename={"/DuelCalculator"}>
            <div className='page-container'>
              <StartUp />
              <Header />
              <Backdrop>
                <div style={{ zIndex: 1, width: '100%' }}>
                  <Routes />
                </div>
                <Particles />
              </Backdrop>
            </div>
          </Router>
        </div>
      </div>
    </Treble>
  );
}

export default App;
