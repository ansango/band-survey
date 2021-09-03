import { useState } from "react";

export const BandAdd = ({ createBand }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length > 0) {
      createBand(value);
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
