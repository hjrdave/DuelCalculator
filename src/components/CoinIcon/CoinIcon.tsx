import styles from "./coinIcon.module.scss";

interface Props {
  className?: string;
  classNameContainer?: string;
  type: "heads" | "tails";
}
export default function CoinIcon({
  className,
  classNameContainer,
  type,
}: Props) {
  return (
    <>
      <div
        className={`${styles.compContainer} d-flex justify-content-center ${classNameContainer}`}
      >
        {type === "heads" ? (
          <i className={`far fa-circle-user ${className}`}></i>
        ) : type === "tails" ? (
          <i className={`far fa-copyright ${className}`}></i>
        ) : null}
      </div>
    </>
  );
}
