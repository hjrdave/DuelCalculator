import React from 'react';
import { useAppStore } from '../Store';
import { DuelBoard } from '../../interfaces';

interface IOptions {
    activePlayer?: number;
}
const usePlayer = (options?: IOptions) => {

    const [State, Store, Util] = useAppStore();

    //All player data
    const playerData = State?.playerData;

    //Amount of players set
    const playerAmount = State?.playerAmount;

    //Active page player (used when on calculator page or player settings)
    const [activePlayer, setActivePlayer] = React.useState<DuelBoard.PlayerData>();

    //Makes sure active player is set by page route params on mount
    React.useEffect(() => {
        if (options?.activePlayer !== undefined) {
            setActivePlayer(playerData?.filter((player) => (player?.number === options?.activePlayer))[0]);
        }
    }, [options?.activePlayer]);

    //Resets all Lifepoints to default
    const resetLifePoints = () => {
        const playersWithResetScore = playerData?.map((player) => ({ ...player, lifePoints: 8000, prevLifePoints: 8000 }));
        Store.update(Util.actions.updatePlayerData, playersWithResetScore);
    };

    //Prevents player count up when navigating back to home (syncs lifepoints and prev lifepoints)
    const preventLifePointCount = () => {
        const updatedData = playerData?.map((player) => {
            return {
                ...player,
                prevLifePoints: player?.lifePoints,
                lifePoints: player?.lifePoints
            }
        });
        Store.update(Util.actions.updatePlayerData, updatedData);
    }

    //Get player name by number
    const getPlayerName = (playerNumber?: number) => {
        const number = (activePlayer !== undefined) ? activePlayer?.number : playerNumber;
        const name = playerData.find((player) => (player?.number === number))?.name;
        return name;
    };

    //Sets player name by number
    const setPlayerName = (newName: string, playerNumber?: number) => {
        const number = (activePlayer?.number !== undefined) ? activePlayer.number : playerNumber;
        const updatePlayerData = playerData?.map((player) => {
            if (player.number === number) {
                return {
                    ...player,
                    name: newName
                };
            } else {
                return player;
            }
        });
        Store.update(Util.actions.updatePlayerData, updatePlayerData);
    }

    //Get player lifepoints by number
    const getLifePoints = (playerNumber?: number) => {
        const number = (activePlayer !== undefined) ? activePlayer?.number : playerNumber;
        const lifePoints = playerData.find((player) => (player?.number === number))?.lifePoints;
        return lifePoints;
    };

    //Get previous lifepoints by number
    const getPrevLifePoints = (playerNumber?: number) => {
        const number = (activePlayer !== undefined) ? activePlayer?.number : playerNumber;
        const prevlifePoints = playerData.find((player) => (player?.number === number))?.prevLifePoints;
        return prevlifePoints;
    };

    //Minus lifepoints from player by number
    const loseLifePoints = (amount: number, playerNumber?: number) => {
        const number = (activePlayer?.number !== undefined) ? activePlayer.number : playerNumber;
        const updatePlayerData = playerData?.map((player) => {
            if (player.number === number) {
                const newScore = player?.lifePoints - amount;
                return {
                    ...player,
                    lifePoints: (newScore < 0) ? 0 : newScore,
                    prevLifePoints: player?.lifePoints
                };
            } else {
                return player;
            }
        });
        Store.update(Util.actions.updatePlayerData, updatePlayerData);
    };

    //Add lifepoints from player by number
    const gainLifePoints = (amount: number, playerNumber?: number,) => {
        const number = (activePlayer?.number !== undefined) ? activePlayer.number : playerNumber;
        const updatePlayerData = playerData.map((player) => {
            if (player?.number === number) {
                const newScore = player?.lifePoints + amount;
                return {
                    ...player,
                    lifePoints: newScore,
                    prevLifePoints: player?.lifePoints
                };
            } else {
                return player;
            }
        });
        Store.update(Util.actions.updatePlayerData, updatePlayerData);
    };

    return {
        playerData,
        playerAmount,
        resetLifePoints,
        preventLifePointCount,
        getPlayerName,
        setPlayerName,
        getLifePoints,
        getPrevLifePoints,
        loseLifePoints,
        gainLifePoints
    }
};

export default usePlayer;