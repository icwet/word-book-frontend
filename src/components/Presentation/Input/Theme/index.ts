import { colors } from "config/variables.json";
import searchIcon from "../Images/search.svg";

export interface InputTheme {
  background: string;
  weight: {
    300: string;
    400: string;
    500: string;
    600: string;
    800: string;
  };
  sizes: {
    s: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius: string;
      fontSize: string;
    };
    m: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius: string;
      fontSize: string;
    };
    l: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius: string;
      fontSize: string;
    };
    xl: {
      width?: string;
      height?: string;
      padding: string;
      borderRadius: string;
      fontSize: string;
    };
  };
  icon: {
    search: {
      width: string;
      height: string;
      paddingLeft: string;
      background: string;
    };
  };
}

export const Input: InputTheme = {
  background: colors.Input.baseGray,
  weight: {
    300: "300",
    400: "400",
    500: "500",
    600: "600",
    800: "800",
  },
  sizes: {
    s: {
      width: "100%",
      padding: "8px",
      borderRadius: "72px",
      fontSize: "14px",
    },
    m: {
      padding: "12px",
      borderRadius: "4px",
      fontSize: "14px",
    },
    l: {
      padding: "18px",
      borderRadius: "4px",
      fontSize: "14px",
    },
    xl: {
      width: "100%",
      padding: "18px",
      borderRadius: "4px",
      fontSize: "16px",
    },
  },
  icon: {
    search: {
      width: "16px",
      height: "16px",
      paddingLeft: "36px",
      background: `url(${searchIcon}) center/contain no-repeat`,
    },
  },
};
