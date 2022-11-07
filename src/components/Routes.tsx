import React from "react";
import { Route, Routes as RoutesRR, Outlet } from 'react-router-dom';
import { default as Duelboard } from './scenes/DuelBoard';
import { default as About } from './scenes/About';
import { default as CoinToss } from './scenes/CoinToss';
import { default as DiceRoll } from './scenes/DiceRoll';
import { default as LPCalculator } from './scenes/LPCalculator';
import { default as PlayerName } from './scenes/PlayerName';
import { default as ResetBoard } from './scenes/ResetBoard';
import { default as Settings } from './scenes/Settings';

export default function Routes() {

  return (
    <RoutesRR>
      <Route path={'/'} element={<Outlet />}>
        <Route index element={<Duelboard />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/coin-toss'} element={<CoinToss />} />
        <Route path={'/dice-roll'} element={<DiceRoll />} />
        <Route path={'/reset-board'} element={<ResetBoard />} />
        <Route path={'/settings'} element={<Settings />} />
        <Route path={'/lp-calculator/:operator/:playerNumber'} element={<LPCalculator />} />
        <Route path={'/player-name/:playerNumber'} element={<PlayerName />} />
      </Route>
    </RoutesRR>
  );
}
