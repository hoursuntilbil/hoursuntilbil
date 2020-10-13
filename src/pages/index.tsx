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
import { Helmet } from "react-helmet";

import theme from "../theme";
import { nextShowDate } from "../utils";

export default function Index() {
  const next = nextShowDate();
  const deltaHours = next.diff(DateTime.utc()).as("hours");

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Helmet>
        <title>Hours Until Bil</title>
        <meta
          name="description"
          content="Hours until MC Bil Wenton next takes to the mic"
        />
      </Helmet>
      <Stack spacing={6} textAlign="center" shouldWrapChildren py="6">
        <Box>
          <Image
            width="200px"
            height="200px"
            mx="auto"
            src="bil.png"
            alt="Bil Wenton"
          />
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
