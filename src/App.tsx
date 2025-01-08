import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";
import Backdrop from "./components/Backdrop";
import Particles from "./components/Particles";
import StartUp from "./StartUp";
import { DevtoolsPanel } from "@sandstack/neuron-devtools";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      {import.meta.env.DEV ? <DevtoolsPanel /> : null}

      <div className="d-flex">
        <Router basename={"/"}>
          <div className="page-container">
            <StartUp />
            <Header />
            <Backdrop>
              <div style={{ zIndex: 1, width: "100%" }}>
                <Routes />
              </div>
              <Particles />
            </Backdrop>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
