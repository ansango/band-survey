import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SocketProvider } from "./state/socket/SocketProvider";

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider serverPath="http://localhost:8080">
      <App />
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
