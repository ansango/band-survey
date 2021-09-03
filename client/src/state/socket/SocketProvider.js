import { createContext, useContext } from "react";
import useSocket from "../../hooks/useSocket";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocketIO = () => useContext(SocketContext);

export { SocketProvider, useSocketIO };

