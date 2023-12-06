import { Navbar } from "react-bootstrap";
import useDuelBoard from "../../hooks/use-duelboard";
import styles from "./header.module.scss";

export default function Header() {
  const board = useDuelBoard();

  return (
    <>
      <Navbar className={`${styles.header} d-flex justify-content-between`}>
        <Navbar.Text className={`px-3 ${styles.navbarText}`}>
          <i
            className={`fa-solid fa-circle-info cursor ${styles.settingsIcon}`}
            onClick={board.goToAbout}
          ></i>
        </Navbar.Text>
        <Navbar.Brand
          className={`${styles.navbarBrand} cursor`}
          onClick={board.goToHome}
        >
          <div>DuelCalculator.js</div>
        </Navbar.Brand>
        <Navbar.Text
          className={`px-3 ${styles.navbarText}`}
          onClick={() => board.toggleFullscreen()}
        >
          <i
            className={`fas ${
              board.isFullScreen ? "fa-compress-arrows-alt" : "fa-expand"
            } ${styles.fullScreenIcon} cursor`}
          ></i>
        </Navbar.Text>
      </Navbar>
    </>
  );
}
