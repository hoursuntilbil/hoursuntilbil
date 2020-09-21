import { theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";

export default merge(theme, {
  fonts: {
    // heading: `${theme.fonts.heading}`,
  },
  colors: {
    brand: {
      primary: theme.colors.red,
    },
  },
});
