import React from "react";
import ReactDOM from "react-dom/client";
import DevtoolsPanel from "@sandstack/neuron-devtools";
import Store from "./Store.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DevtoolsPanel />
    <Store />
    <App />
  </React.StrictMode>
);
