import { Row, Col } from "react-bootstrap";
import useDuelBoard from "../../hooks/useDuelboard";
import styles from "./utilityBar.module.scss";

export default function UtilityBar() {
  const board = useDuelBoard();

  return (
    <>
      <Row
        className={`${styles.utilityBar} utility-bar d-flex justify-content-center`}
      >
        <Col xs="6" className="d-flex justify-content-between">
          <p className="mb-0 cursor" onClick={board.goToCoinToss}>
            <i className="far fa-copyright"></i>
          </p>
          <p className="mb-0 cursor" onClick={board.goToDiceRoll}>
            <i className="fas fa-dice-five"></i>
          </p>
          <p className="mb-0 cursor" onClick={board.goToBoardReset}>
            <i className="fa-solid fa-rotate-left"></i>
          </p>
          <p className="mb-0 cursor" onClick={board.goToSettings}>
            <i className="fa-solid fa-gear"></i>
          </p>
        </Col>
      </Row>
    </>
  );
}
