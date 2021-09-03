import { createContext, useContext, useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

const options = { transports: ["websocket"] };
const SocketContext = createContext();

const SocketProvider = ({ children, serverPath }) => {
  //* Para evitar cambios si el serverPath no cambio utilizamos useMemo
  const socket = useMemo(() => io.connect(serverPath, options), [serverPath]);
  const [online, setOnline] = useState(false);

  // * abrimos la conexión
  useEffect(() => setOnline(socket.connected), [socket]);

  // * nos conectamos
  useEffect(() => socket.on("connect", () => setOnline(true)), [socket]);

  // * nos desconectamos
  useEffect(() => socket.on("disconnect", () => setOnline(false)), [socket]);
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => useContext(SocketContext);

export { SocketProvider, useSocket };
