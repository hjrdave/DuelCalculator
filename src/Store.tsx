import Neuron from "@sandstack/neuron/react";
import Devtools from "@sandstack/neuron/modules/devtools";
import Persist, { PersistProps } from "@sandstack/neuron/modules/persist";
import { DuelBoard } from "./interfaces";

interface IState {
  playerAmount: number;
  playerData: DuelBoard.PlayerData[];
  isAnimatedBKEnabled: boolean;
}

export const { State, useNeuron, Module } = Neuron.Store<
  IState,
  PersistProps
>();

export default function Store() {
  return (
    <>
      <Module use={Persist} />
      <Module use={Devtools({ storeName: "AppStore" })} />
      <State name={"playerAmount"} state={2} persist />
      <State name={"isAnimatedBKEnabled"} state={false} persist />
      <State
        name={"playerData"}
        state={[
          {
            name: "Player 1",
            number: 1,
            lifePoints: 8000,
            prevLifePoints: 8000,
            hitZero: false,
          },
          {
            name: "Player 2",
            number: 2,
            lifePoints: 8000,
            prevLifePoints: 8000,
            hitZero: false,
          },
        ]}
        persist
      />
    </>
  );
}
