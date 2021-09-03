import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SocketProvider } from "./state/socket/SocketProvider";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
