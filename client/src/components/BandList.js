import { useEffect, useState } from "react";
import { useSocketIO } from "../state/socket/SocketProvider";

export const BandList = () => {
  const { socket } = useSocketIO();
  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on("currentBands", (res) => setBands(res));
    return () => socket.off("currentBands");
  }, [socket]);

  const voting = (id) => socket.emit("votingBand", { id });
  const remove = (id) => socket.emit("removeBand", { id });
  const handleBlur = (id, name) => socket.emit("changeBandName", { id, name });

  const handleName = (event, id) => {
    const newName = event.target.value;
    setBands((_bands) =>
      _bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };

  const CreateRows = () => {
    return (
      <>
        {bands.map((band) => (
          <tr key={band.id}>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => voting(band.id)}
              >
                +1
              </button>
            </td>
            <td>
              <input
                className="form-control"
                value={band.name}
                onChange={(event) => handleName(event, band.id)}
                onBlur={() => handleBlur(band.id, band.name)}
              />
            </td>
            <td>
              <h3>{band.votes}</h3>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => remove(band.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  };
  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{CreateRows()}</tbody>
      </table>
    </>
  );
};
