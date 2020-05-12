import { DefaultTheme } from "styled-components";
import variables from "config/variables.json";

const defaultTheme: DefaultTheme = {
  fontFamily: {
    Roboto: "Roboto-Regular",
  },
  fontSize: {
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "18px",
  },
  color: {
    text: {
      current: variables.colors.baseBlack,
      alt: variables.colors.baseGray,
    },
  },
  lineHeight: {
    s: "14px",
    m: "18px",
    l: "20px",
    xl: "24px",
  },
};

export { defaultTheme };
