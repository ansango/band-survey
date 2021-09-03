import { useEffect, useState } from "react";

export const BandList = ({ data = [] }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => setBands(data), [data]);

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

  const handleBlur = (id, name) => {};

  const CreateRows = () => {
    return (
      <>
        {bands.map((band) => (
          <tr key={band.id}>
            <td>
              <button className="btn btn-primary">+1</button>
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
              <button className="btn btn-danger">Remove</button>
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
