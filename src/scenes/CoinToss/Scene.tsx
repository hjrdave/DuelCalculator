import { Row, Col } from "react-bootstrap";
import Content from "../../components/Content";
import ConfirmBtns from "../../components/ConfirmBtns";
import CoinIcon from "../../components/CoinIcon";
import Animate from "../../components/Animate";
import useDuelBoard from "../../hooks/useDuelboard";
import styles from "./scene.module.scss";

function Scene() {
  const board = useDuelBoard();

  return (
    <>
      <Content className={`d-flex flex-column justify-content-center`}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={8}>
            <Animate type={"fadeIn"}>
              <div className={`${board.tossCoin ? styles.translateCoin : ""}`}>
                <div className={`${board.rotateCoin ? styles.rotateCoin : ""}`}>
                  <CoinIcon type={board.coinFace} />
                </div>
              </div>
              <ConfirmBtns
                confirmLabel="Flip"
                onConfirm={() => board.onCoinToss()}
              />
            </Animate>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Scene;
