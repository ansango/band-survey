import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
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
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Add a new band</FormLabel>
          <Input
            placeholder="New band name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
