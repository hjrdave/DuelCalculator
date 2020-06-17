import React from 'react';
import './App.scss';
import { BrowserRouter as Router} from 'react-router-treble';
import SideNav from './components/app-ui/side-nav';
import Routes from './components/routes';

//Treble
//import Treble from './archive/_treble-gsm';
import Treble from 'treble-gsm';
import Store from './Store';

 
const App: React.FC = () => {
  return (
    <Treble store={Store}>
      <div className="App">
        <div className='d-flex'>
          <Router basename={"/"}>
            <SideNav />
            <div className='page-container'>
              <Routes />
            </div>
          </Router>
        </div>
      </div>
    </Treble>
  );
}

export default App;
