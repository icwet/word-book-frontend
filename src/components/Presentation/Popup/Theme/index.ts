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
      zIndex: string;
    };
  };
}

export const Popup: PopupTheme = {
  size: {
    default: {
      position: "absolute",
      display: "grid",
      grid: "",
      top: "",
      bottom: "",
      left: "",
      right: "",
      padding: "",
      margin: "",
      boxShadow: "",
      background: "",
      zIndex: "",
    },
  },
};
