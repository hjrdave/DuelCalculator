import Content from "../../components/Content";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import useDuelBoard from "../../hooks/useDuelboard";
import Calculator from "../../components/Calculator";
import Animate from "../../components/Animate";
import styles from "./scene.module.scss";
import { DuelBoard } from "../../interfaces";

export default function Scene() {
  const params = useParams<DuelBoard.RouteParams>();
  const board = useDuelBoard({
    activePlayer: params?.playerNumber,
  });
  const operator = params?.operator;

  return (
    <>
      <Content className={`d-flex flex-column justify-content-center`}>
        <Animate type={"fadeIn"}>
          <Row className="d-flex justify-content-center">
            <Col xs={10} className="d-flex justify-content-center">
              <h1 className={styles.playerName}>{board.getPlayerName()}</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={10} className={"pt-4"}>
              <Calculator
                lifePoints={board.getLifePoints() || 0}
                operatorType={operator}
                onCancel={board.goToHome}
                onEnter={(input: number) => {
                  if (operator === "minus") {
                    board.loseLifePoints(input);
                  } else {
                    board.gainLifePoints(input);
                  }
                  board.goToHome();
                }}
              />
            </Col>
          </Row>
        </Animate>
      </Content>
    </>
  );
}
