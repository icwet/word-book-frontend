import variables from "config/variables.json";

export const TextTheme = {
  Text: {
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
      current: variables.colors.baseBlack,
      alt: variables.colors.baseGray,
    },
    lineHeight: {
      s: "18px",
      m: "20px",
      l: "24px",
      xl: "26px",
    },
  },
};
