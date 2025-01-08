import { Row, Col } from "react-bootstrap";
import Content from "../../components/Content";
import Dice from "../../components/Dice";
import ConfirmBtns from "../../components/ConfirmBtns";
import Animate from "../../components/Animate";
import useDuelBoard from "../../hooks/useDuelboard";
import styles from "./scene.module.scss";

export default function Scene() {
  const board = useDuelBoard();

  return (
    <>
      <Content className={` d-flex flex-column justify-content-center`}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={8}>
            <Animate type={"fadeIn"}>
              <div className={`${board.tossDice ? styles.translateDice : ""}`}>
                <div className={`${board.tossDice ? styles.bounceDice : ""}`}>
                  <div className={`${board.tossDice ? styles.rotateDice : ""}`}>
                    <Dice type={board.diceSide} />
                  </div>
                </div>
              </div>
              <ConfirmBtns
                confirmLabel="Roll Dice"
                onConfirm={() => board.onDiceRoll()}
              />
            </Animate>
          </Col>
        </Row>
      </Content>
    </>
  );
}
