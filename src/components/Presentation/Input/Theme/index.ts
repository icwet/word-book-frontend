import { colors } from "config/variables.json";
import searchIcon from "../Images/search.svg";

export const InputTheme = {
  Input: {
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
        padding: "18px",
        borderRadius: "4px",
        fontSize: "14px",
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
  },
};
