import React from "react";
import useDuelBoard from "./hooks/useDuelboard";

export default function StartUp() {
  const board = useDuelBoard();

  React.useEffect(() => {
    if (board.playerAmount > 2) {
      const newPlayerData = [
        ...board.playerData,
        { ...board.playerData[0], name: "Player 3", number: 3 },
      ];
      board.setPlayerData(newPlayerData);
    } else {
      const newPlayerData = [board.playerData[0], board.playerData[1]];
      board.setPlayerData(newPlayerData);
    }
  }, [board.playerAmount]);

  return null;
}
