import { usePlayerAmount, useIsAnimatedBKEnabled } from "../neurons";

const useSettings = () => {
  const [, { set: setPlayerAmount }] = usePlayerAmount();
  const [isAnimatedBKEnabled, { set: setIsAnimatedBKEnabled }] =
    useIsAnimatedBKEnabled();

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
