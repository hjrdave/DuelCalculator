import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
    const navigate = useNavigate();

    const goToDiceRoll = () => {
        navigate('/dice-roll');
    };

    const goToHome = () => {
        navigate('/');
    };

    const goToCoinToss = () => {
        navigate('/coin-toss');
    };

    const goToBoardReset = () => {
        navigate('/reset-board');
    };

    const goToCalc = (operator: 'minus' | 'add', playerNumber: number) => {
        navigate(`/lp-calculator/${operator}/${playerNumber}`);
    };

    const goToPlayerName = (playerNumber: number) => {
        navigate(`/player-name/${playerNumber}`)
    };

    const goToSettings = () => {
        navigate(`/settings`)
    };

    const goToAbout = () => {
        navigate(`/about`)
    };

    return {
        goToHome,
        goToDiceRoll,
        goToCoinToss,
        goToBoardReset,
        goToCalc,
        goToPlayerName,
        goToSettings,
        goToAbout
    }
};

export default useNavigation;