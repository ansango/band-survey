import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Spacer, Tooltip, Link } from "@chakra-ui/react";
import { NodeIcon, ReactIcon, SocketIcon } from "./icons";

const Footer = () => {
  return (
    <Box p="5" style={{ flexShrink: 0 }}>
      <Flex justify="center" align="center">
        <Link mx="3" href="https://ansango.com" isExternal>
          @ansango <ExternalLinkIcon />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
