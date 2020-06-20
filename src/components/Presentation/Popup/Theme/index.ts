import { colors } from "config/variables.json";
export interface PopupTheme {
  size: {
    default: {
      position: string;
      display: string;
      grid: string;
      top: string;
      bottom: string;
      left: string;
      right: string;
      padding: string;
      margin: string;
      boxShadow: string;
      background: string;
      borderRadius: string;
      "z-index": string;
    };
  };
}

export const Popup: PopupTheme = {
  size: {
    default: {
      position: "absolute",
      display: "grid",
      grid: "24px 52px / 1fr",
      top: "104px",
      bottom: "",
      left: "16px",
      right: "16px",
      padding: "16px",
      margin: "auto",
      boxShadow:
        "0px 5px 16px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.04)",
      borderRadius: "4px",
      background: colors.Popup.baseWhite,
      "z-index": "100",
    },
  },
};
