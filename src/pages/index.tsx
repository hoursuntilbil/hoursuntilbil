import React from "react";
import {
  Stack,
  Heading,
  Image,
  Box,
  Link,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/core";
import { DateTime } from "luxon";

import theme from "../theme";
import { nextShowDate } from "../utils";

export default function Index() {
  const next = nextShowDate();
  const deltaHours = next.diff(DateTime.utc()).as("hours");

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Stack spacing={6} textAlign="center" shouldWrapChildren paddingY="6">
        <Box>
          <Image width="200px" marginX="auto" src="bil.png" alt="Bil Wenton" />
        </Box>
        <Heading as="h1" size="2xl">
          {Math.round(deltaHours)} hours to go
        </Heading>
        <Box>
          MC Bil Wenton returns to{" "}
          <Link href="https://www.subtleradio.com/" color="brand.primary.500">
            the mic
          </Link>{" "}
          {next.toLocaleString(DateTime.DATETIME_MED)}
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
