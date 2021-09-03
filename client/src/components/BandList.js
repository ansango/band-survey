import { useEffect, useState } from "react";
import { useSocketIO } from "../state/socket/SocketProvider";
import { Button, Input, Flex, Box, Grid } from "@chakra-ui/react";

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

  return (
    <Box px="5">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={1}
      >
        {bands.map((band) => (
          <Flex py="2" align="center" justify="center">
            <Box px="5">
              <Input
                variant="filled"
                value={band.name}
                onChange={(event) => handleName(event, band.id)}
                onBlur={() => handleBlur(band.id, band.name)}
              />
            </Box>
            <Box pr="1">
              <Button colorScheme="blue" onClick={() => voting(band.id)}>
                +1
              </Button>
            </Box>
            {/* <Box pl="1">
            <Button colorScheme="red" onClick={() => remove(band.id)}>
              <DeleteIcon />
            </Button>
          </Box> */}
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};
