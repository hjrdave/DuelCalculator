import { useNeuron } from "../Store";

const useSettings = () => {
  const [, setPlayerAmount] = useNeuron((state) => state.playerAmount);
  const [isAnimatedBKEnabled, setIsAnimatedBKEnabled] = useNeuron(
    (state) => state.isAnimatedBKEnabled
  );

  const enableAnimatedBK = (isEnabled: boolean) => {
    setIsAnimatedBKEnabled(isEnabled);
  };

  return {
    isAnimatedBKEnabled,
    enableAnimatedBK,
    setPlayerAmount,
  };
};

export default useSettings;
