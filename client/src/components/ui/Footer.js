import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Spacer, Tooltip, Link } from "@chakra-ui/react";
import { NodeIcon, ReactIcon, SocketIcon } from "./icons";

const Footer = () => {
  return (
    <Box p="5" style={{ flexShrink: 0 }}>
      <Flex justify="center" align="center">
        <Text mx="2">Made with </Text>
        <Box ml="5" mr="2">
          <ReactIcon />
        </Box>
        <Box mx="2">
          <NodeIcon />
        </Box>
        <Box ml="2" mr="5">
          <SocketIcon />
        </Box>
        <Link mx="3" href="https://ansango.com" isExternal>
          by @ansango <ExternalLinkIcon />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
