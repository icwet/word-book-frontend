import { colors } from "config/variables.json";

export interface ButtonTheme {
  theme: {
    main: {
      background: string;
      color: string;
    };
    alt: {
      background: string;
      color: string;
    };
    disabled: {
      background: string;
      color: string;
    };
    warning: {
      background: string;
      color: string;
    };
  };
  sizes: {
    s: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius?: string;
      fontSize: string;
      lineHeight?: string;
    };
    m: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius?: string;
      fontSize: string;
      lineHeight?: string;
    };
    l: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius?: string;
      fontSize: string;
      lineHeight?: string;
    };
  };
}

export const Button: ButtonTheme = {
  theme: {
    main: {
      background: colors.Button.baseBlack,
      color: colors.Button.baseWhite,
    },
    alt: {
      background: colors.Button.baseGray,
      color: colors.Button.baseBlack,
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
};
