import { useState } from "react";
import { useSocketIO } from "../state/socket/SocketProvider";

export const BandAdd = () => {
  
  const { socket } = useSocketIO();
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      socket.emit("addBand", { name: value });
      setValue("");
    }
  };

  return (
    <>
      <h3>Add a band</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="New band name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </>
  );
};
