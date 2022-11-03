import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './common/Header';
import SettingsMenu from './common/SettingsMenu';
import Treble from 'treble-gsm';
import Store from './Store';


const App: React.FC = () => {
  return (
    <Treble store={Store}>
      <div className="App">
        <div className='d-flex'>
          <Router basename={"/"}>
            <div className='page-container'>
              <Header />
              <Routes />
            </div>
          </Router>
        </div>
      </div>
    </Treble>
  );
}

export default App;