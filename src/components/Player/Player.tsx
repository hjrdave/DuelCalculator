import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Animate from "../Animate";
import useDuelBoard from "../../hooks/useDuelboard";
import styles from "./player.module.scss";

interface Props {
  number: number;
  name: string;
  lifePoints: number;
  prevLifePoints: number;
}
export default function Player({
  number,
  name,
  lifePoints,
  prevLifePoints,
}: Props) {
  const board = useDuelBoard();
  const [hitZero, setHitZero] = React.useState(false);

  React.useEffect(() => {
    //has player hit zero?
    setHitZero(board.hitZero.find((value) => value === number) ? true : false);
  }, []);

  return (
    <>
      <Animate type={"fadeIn"}>
        <div
          className={`${styles.player} ${hitZero ? "glow-red" : "glow"} m-4`}
        >
          <div
            className={`${styles.playerName} pt-3 d-flex justify-content-between`}
          >
            <p className="ps-4">
              <Link to={`/lp-calculator/add/${number}`}>
                <i className="fas fa-plus"></i>
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none" }}
                to={`/player-name/${number}`}
              >
                {name}
              </Link>
            </p>
            <p className="pe-4">
              <Link to={`/lp-calculator/minus/${number}`}>
                <i className="fas fa-minus"></i>
              </Link>
            </p>
          </div>
          <div className={`${styles.playerCard} d-flex justify-content-center`}>
            <p
              className={
                board.playerAmount > 2 ? styles.smallCount : styles.count
              }
            >
              <CountUp
                start={prevLifePoints}
                end={lifePoints}
                delay={0}
                duration={0.75}
                useEasing={true}
              />
            </p>
          </div>
        </div>
      </Animate>
    </>
  );
}
