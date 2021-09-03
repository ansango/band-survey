import { TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Spacer, Tooltip } from "@chakra-ui/react";

import { useSocketIO } from "../../state/socket/SocketProvider";

const NavBar = () => {
  const { online } = useSocketIO();
  return (
    <Box p="5" style={{ flexShrink: 0 }}>
      <Flex align="center">
        <Box>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
          >
            Band Survey 🔥
          </Text>
        </Box>
        <Spacer />
        <Box>
          {online ? (
            <Tooltip label="Online" fontSize="md" placement="left">
              <TriangleUpIcon color="green.300" />
            </Tooltip>
          ) : (
            <Tooltip label="Offline" fontSize="md" placement="left">
              <TriangleUpIcon color="red.300" />
            </Tooltip>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
