import React from 'react';
import useNavigation from './use-navigation';
import useCoinToss from './use-coin-toss';
import useDiceRoll from './use-dice-roll';
import usePlayer from './use-player';
import useHeader from './use-header';
interface IOptions {
    activePlayer?: '1' | '2' | '3' | '4' | 1 | 2 | 3 | 4;
}
/**
 * Hook that controls Duelboard operations. 
 * Can be passed options for default player when instantiated
 * @param options 
 * @returns 
 */
const useDuelBoard = (options?: IOptions) => {

    const number = (options?.activePlayer !== undefined) ? (typeof options.activePlayer === 'string') ? Number.parseInt(options?.activePlayer) : options.activePlayer : options?.activePlayer;

    //sets active player from passed params
    const [activePlayerNumber, setActivePlayerNumber] = React.useState<number | undefined>(number);
    React.useEffect(() => {
        setActivePlayerNumber(number);
    }, [number]);

    /**Coin Toss methods */
    const {
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
    } = usePlayer({ activePlayerNumber: activePlayerNumber });

    const {
        onCoinToss,
        tossCoin,
        coinFace,
        rotateCoin
    } = useCoinToss();

    const {
        onDiceRoll,
        tossDice,
        diceSide
    } = useDiceRoll();

    const {
        goToHome,
        goToDiceRoll,
        goToCoinToss,
        goToBoardReset,
        goToCalc,
        goToPlayerName,
        goToSettings
    } = useNavigation();

    const {
        toggleFullscreen,
        isFullScreen
    } = useHeader();

    return {
        playerData,
        playerAmount,
        resetLifePoints,
        preventLifePointCount,
        getLifePoints,
        getPrevLifePoints,
        getPlayerName,
        setPlayerName,
        loseLifePoints,
        gainLifePoints,
        goToHome,
        goToBoardReset,
        goToCoinToss,
        goToDiceRoll,
        goToCalc,
        goToPlayerName,
        goToSettings,
        onCoinToss,
        tossCoin,
        coinFace,
        rotateCoin,
        onDiceRoll,
        tossDice,
        diceSide,
        toggleFullscreen,
        isFullScreen
    }
};

export default useDuelBoard;