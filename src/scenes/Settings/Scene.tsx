import Content from "../../components/Content";
import ConfirmBtns from "../../components/ConfirmBtns";
import Switch from "../../components/Switch";
import { Row, Col } from "react-bootstrap";
import useDuelBoard from "../../hooks/useDuelboard";

export default function Scene() {
  const board = useDuelBoard();

  return (
    <>
      <Content className={` d-flex justify-content-center`}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} className={"d-flex flex-column "}>
            <div className={"pb-2"}>
              <h3 className={"text-center"}>Change DuelBoard Settings</h3>
            </div>
            <div className={"pt-4"}>
              <Switch
                label={"Enable Animated Background"}
                checked={board.isAnimatedBKEnabled}
                onChange={board.enableAnimatedBK}
              />
            </div>
            <div className={"pt-4"}>
              <Switch
                label={"Enable 3 Player Mode"}
                checked={board.playerAmount > 2 ? true : false}
                onChange={(value) =>
                  value ? board.setPlayerAmount(3) : board.setPlayerAmount(2)
                }
              />
            </div>
            <div>
              <ConfirmBtns
                onCancel={() => {
                  board.goToHome();
                }}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
}
