import { Row, Col } from "react-bootstrap";
import Content from "../../components/Content";
import useDuelBoard from "../../hooks/useDuelboard";
import ConfirmBtns from "../../components/ConfirmBtns";
import Animate from "../../components/Animate";

export default function Scene() {
  const board = useDuelBoard();

  return (
    <>
      <Content className={` d-flex flex-column justify-content-center`}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={8}>
            <Animate type={"fadeIn"}>
              <div>
                <h3 className={"text-center"}>
                  Do you want to Reset Duelboard?
                </h3>
              </div>
              <ConfirmBtns
                confirmLabel="Yes"
                onConfirm={() => {
                  board.resetLifePoints();
                  board.goToHome();
                }}
              />
            </Animate>
          </Col>
        </Row>
      </Content>
    </>
  );
}
