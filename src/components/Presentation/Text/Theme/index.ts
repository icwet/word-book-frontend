import variables from "config/variables.json";

export interface TextTheme {
  fontFamily: {
    Roboto: string;
  };
  fontSize: {
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  color: {
    current: string;
    alt: string;
  };
  lineHeight: {
    s: string;
    m: string;
    l: string;
    xl: string;
  };
}

export const Text: TextTheme = {
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
};
