import React from "react";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const FooterToo = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: "1",
        md: "1",
      }}
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <img src="./lush-logo-two.png" width="350px" height="122px" />
        </Stack>
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" py="2" color="subtle">
          &copy; {new Date().getFullYear()} Lush Products. All rights reserved.
          All products featured are entirely fictitious.
        </Text>
      </Stack>
    </Container>
  );
};
