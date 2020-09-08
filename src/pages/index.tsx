import React from "react";
import {
  Stack,
  Heading,
  Image,
  Text,
  Box,
  Link,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/core";
import theme from "../theme";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Stack spacing={6} textAlign="center" shouldWrapChildren>
        <Box>
          <Image size="200px" src="bil.png" alt="Bil Wenton" />
        </Box>
        <Heading as="h1" size="2xl">
          N hours to go
        </Heading>
        <Box>
          MC Bil Wenton returns to{" "}
          <Link href="https://www.subtleradio.com/">the mic</Link> ...
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
