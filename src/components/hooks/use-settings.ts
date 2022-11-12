import { useAppStore } from "../Store";

const useSettings = () => {
    const [{ isAnimatedBKEnabled }, Store, Utils] = useAppStore();

    const enableAnimatedBK = (isEnabled: boolean) => {
        Store.update(Utils.actions.enableAnimatedBK, isEnabled);
    }

    return {
        isAnimatedBKEnabled,
        enableAnimatedBK
    }

};

export default useSettings;