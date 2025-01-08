import { neuron } from "@sandstack/neuron/react";
import { Devtools } from "@sandstack/neuron-devtools";

export const usePlayerAmount = neuron(2, {
  key: "playerAmount",
  modules: [Devtools({ storeName: "playerAmount" })],
});
export const useIsAnimatedBKEnabled = neuron(false, {
  key: "animatedBK",
  modules: [Devtools({ storeName: "animatedBK" })],
});
export const usePlayerData = neuron(
  [
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
  ],
  {
    key: "playerData",
    modules: [Devtools({ storeName: "playerData" })],
  }
);
