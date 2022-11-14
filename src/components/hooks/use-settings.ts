import { useAppStore } from "../Store";

const useSettings = () => {
    const [{ isAnimatedBKEnabled }, Store, Util] = useAppStore();

    const enableAnimatedBK = (isEnabled: boolean) => {
        Store.update(Util.actions.enableAnimatedBK, isEnabled);
    }

    //sets player amount
    const setPlayerAmount = (amount: number) => {
        Store.update(Util.actions.updatePlayerAmount, amount);
    }

    return {
        isAnimatedBKEnabled,
        enableAnimatedBK,
        setPlayerAmount
    }

};

export default useSettings;