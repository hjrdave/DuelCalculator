import React from "react";
import { Route, Routes as RoutesRR, Outlet } from 'react-router-dom';
import { default as Duelboard } from './scenes/DuelBoard';
import { default as About } from './scenes/about';
import { default as CoinToss } from './scenes/CoinToss';
import { default as DiceRoll } from './scenes/DiceRoll';
import { default as LPCalculator } from './scenes/LPCalculator';

export default function Routes() {

  return (
    <RoutesRR>
      <Route path={'/'} element={<Outlet />}>
        <Route index element={<Duelboard />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/coin-toss'} element={<CoinToss />} />
        <Route path={'/dice-roll'} element={<DiceRoll />} />
        <Route path={'/lp-calculator/:operator'} element={<LPCalculator />} />
      </Route>
    </RoutesRR>
  );
}
