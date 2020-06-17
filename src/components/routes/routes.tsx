import React from "react";
import {Route, Switch } from 'react-router-dom';
import {default as Duelboard} from '../scenes/duelboard';
import {default as About} from '../scenes/about';

function Routes() {
  
  return (
      <Switch>
        <Route path='/' exact>
          <Duelboard/>
        </Route>
        <Route path='/about' exact>
          <About/>
        </Route>
      </Switch>
  );
}

export default Routes;
