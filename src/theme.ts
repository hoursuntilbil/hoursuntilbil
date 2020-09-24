import { theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";

export default merge(theme, {
  colors: {
    brand: {
      primary: theme.colors.red,
    },
  },
});
