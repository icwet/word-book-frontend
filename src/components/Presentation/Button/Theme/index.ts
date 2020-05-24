import { colors } from "config/variables.json";
export const ButtonTheme = {
  Button: {
    theme: {
      main: {
        background: colors.Button.baseBlack,
        color: colors.Button.baseWhite,
      },
      alt: {
        background: colors.Button.baseWhite,
        color: colors.Button.baseWhite,
      },
      disabled: {
        background: colors.Button.baseGray,
        color: colors.Button.baseWhite,
      },
      warning: {
        background: colors.Button.baseWarning,
        color: colors.Button.baseWhite,
      },
    },
    sizes: {
      s: {
        padding: "12px",
        borderRadius: "4px",
        fontSize: "12px",
        lineHeight: "20px",
      },
      m: {
        padding: "14px",
        borderRadius: "4px",
        fontSize: "14px",
        lineHeight: "20px",
      },
      l: {
        padding: "16px",
        borderRadius: "4px",
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
  },
};
