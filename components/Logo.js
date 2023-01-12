import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <img src="./lush-logo-two.png" style={{ paddingRight: "20px" }} />
      </Text>
    </Box>
  );
}
