import { useEffect, useState } from "react";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { useSocket } from "./state/socket/SocketProvider";

const App = () => {
  const [bands, setBands] = useState([]);
  const { online, socket } = useSocket();
  useEffect(() => socket.on("currentBands", (res) => setBands(res)), [socket]);
  const voting = (id) => {
    socket.emit("votingBand", { id });
  };

  const remove = (id) => {
    socket.emit("removeBand", { id });
  };

  const changeName = (id, name) => {
    socket.emit("changeBandName", { id, name });
  };

  const createBand = (name) => {
    socket.emit("addBand", { name });
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status{" "}
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </p>
      </div>
      <h1>Band Survey</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            voting={voting}
            remove={remove}
            changeName={changeName}
          />
        </div>
        <div className="col-4">
          <BandAdd createBand={createBand} />
        </div>
      </div>
    </div>
  );
};

export default App;
