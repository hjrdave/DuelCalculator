import React from "react";
import {Route, Switch } from 'react-router-dom';
import {default as Duelboard} from '../scenes/duel-board';
import {default as About} from '../scenes/about';
import {default as CoinToss} from '../scenes/coin-toss';
import {default as DiceRoll} from '../scenes/dice-roll'; 
import {default as LPCalculator} from '../scenes/lp-calculator';

function Routes() {
  
  return (
      <Switch>
        <Route path='/' exact>
          <Duelboard/>
        </Route>
        <Route path='/about' exact>
          <About/>
        </Route>
        <Route path='/coin-toss' exact>
          <CoinToss/>
        </Route>
        <Route path='/dice-roll' exact>
          <DiceRoll/>
        </Route>
        <Route path='/lp-calculator' exact>
          <LPCalculator/>
        </Route>
      </Switch>
  );
}

export default Routes;
