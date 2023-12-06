import Neuron from "@sandstack/neuron/react";
import { DuelBoard } from "./interfaces";

interface IState {
  playerAmount: number;
  playerData: DuelBoard.PlayerData[];
  isAnimatedBKEnabled: boolean;
}

export const { State, useNeuron } = Neuron.Store<IState>();

export default function Store() {
  return (
    <>
      <State name={"playerAmount"} state={2} />
      <State name={"isAnimatedBKEnabled"} state={false} />
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
      />
    </>
  );
}
