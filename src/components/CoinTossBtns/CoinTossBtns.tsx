import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./coinToss.module.scss";

export default function CoinTossBtns() {
  return (
    <>
      <div className="d-flex justify-content-center pt-4">
        <div className="mt-4">
          <Button className={`mr-2 px-4 ${styles.coinTossBtns}`}>Toss</Button>
          <Link to={"./"}>
            <Button className={`ml-2 px-4  ${styles.coinTossBtns}`}>
              Close
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
