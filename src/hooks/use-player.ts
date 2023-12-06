import React from "react";
import { useNeuron } from "../Store";
import { DuelBoard } from "../interfaces";

interface IOptions {
  activePlayerNumber?: number;
}
const usePlayer = (options?: IOptions) => {
  // const [State, Store, Util] = useAppStore();
  const [playerData, setPlayerData] = useNeuron((state) => state.playerData);
  const [playerAmount] = useNeuron((state) => state.playerAmount);

  //Active page player (used when on calculator page or player settings)
  const [activePlayer, setActivePlayer] =
    React.useState<DuelBoard.PlayerData>();

  //Makes sure active player is set by page route params on mount
  React.useEffect(() => {
    if (options?.activePlayerNumber !== undefined) {
      const player = playerData?.find(
        (player) => player?.number === options?.activePlayerNumber
      );
      //alert(player?.name)
      setActivePlayer(player);
    }
  }, [options?.activePlayerNumber]);

  //Resets all Lifepoints to default
  const resetLifePoints = () => {
    const playersWithResetScore = playerData?.map((player) => ({
      ...player,
      lifePoints: 8000,
      prevLifePoints: 8000,
    }));
    setPlayerData(playersWithResetScore);
  };

  //Prevents player count up when navigating back to home (syncs lifepoints and prev lifepoints)
  const preventLifePointCount = () => {
    const updatedData = playerData?.map((player) => {
      return {
        ...player,
        prevLifePoints: player?.lifePoints,
        lifePoints: player?.lifePoints,
      };
    });
    setPlayerData(updatedData);
  };

  //Get player name by number
  const getPlayerName = (playerNumber?: number) => {
    if (playerNumber) {
      const name = playerData.find(
        (player) => player?.number === playerNumber
      )?.name;
      return name;
    } else {
      return activePlayer?.name;
    }
  };

  //Sets player name by number
  const setPlayerName = (newName: string, playerNumber?: number) => {
    const number =
      activePlayer?.number !== undefined ? activePlayer.number : playerNumber;
    const updatePlayerData = playerData?.map((player) => {
      if (player.number === number) {
        return {
          ...player,
          name: newName.length > 0 ? newName : `Player ${number}`,
        };
      } else {
        return player;
      }
    });
    setPlayerData(updatePlayerData);
  };

  //Get player lifepoints by number
  const getLifePoints = (playerNumber?: number) => {
    const number =
      activePlayer !== undefined ? activePlayer?.number : playerNumber;
    const lifePoints = playerData.find(
      (player) => player?.number === number
    )?.lifePoints;
    return lifePoints;
  };

  //Get previous lifepoints by number
  const getPrevLifePoints = (playerNumber?: number) => {
    const number =
      activePlayer !== undefined ? activePlayer?.number : playerNumber;
    const prevlifePoints = playerData.find(
      (player) => player?.number === number
    )?.prevLifePoints;
    return prevlifePoints;
  };

  //Minus lifepoints from player by number
  const loseLifePoints = (amount: number, playerNumber?: number) => {
    const number =
      activePlayer?.number !== undefined ? activePlayer.number : playerNumber;
    const updatePlayerData = playerData?.map((player) => {
      if (player.number === number) {
        const newScore = player?.lifePoints - amount;
        return {
          ...player,
          lifePoints: newScore < 0 ? 0 : newScore,
          prevLifePoints: player?.lifePoints,
        };
      } else {
        return player;
      }
    });
    setPlayerData(updatePlayerData);
  };

  //Add lifepoints from player by number
  const gainLifePoints = (amount: number, playerNumber?: number) => {
    const number =
      activePlayer?.number !== undefined ? activePlayer.number : playerNumber;
    const updatePlayerData = playerData.map((player) => {
      if (player?.number === number) {
        const newScore = player?.lifePoints + amount;
        return {
          ...player,
          lifePoints: newScore,
          prevLifePoints: player?.lifePoints,
        };
      } else {
        return player;
      }
    });
    setPlayerData(updatePlayerData);
  };

  //Who hit zero
  const hitZero = playerData
    .filter((player) => player.lifePoints === 0)
    .map((player) => player.number);

  return {
    playerData,
    playerAmount,
    hitZero,
    resetLifePoints,
    preventLifePointCount,
    getPlayerName,
    setPlayerName,
    getLifePoints,
    getPrevLifePoints,
    loseLifePoints,
    gainLifePoints,
    setPlayerData,
  };
};

export default usePlayer;
