import React from 'react';
import './App.scss';
import { BrowserRouter as Router} from 'react-router-treble';
import Routes from './components/routes';
import Header from './components/app-ui/header';
import Treble from 'treble-gsm';
import Store from './Store';

 
const App: React.FC = () => {
  return (
    <Treble store={Store}>
      <div className="App">
        <div className='d-flex'>
          <Router basename={"/"}>
            <div className='page-container'>
              <Header/>
              <Routes />
            </div>
          </Router>
        </div>
      </div>
    </Treble>
  );
}

export default App;
