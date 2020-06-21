export interface ModalTheme {
  type: {
    default: {
      display: string;
      position: string;
      bottom: string;
      padding: string;
      "z-index": string;
    };
  };
}

export const Modal: ModalTheme = {
  type: {
    default: {
      display: "grid",
      position: "absolute",
      bottom: "0",
      padding: "16px",
      "z-index": "100",
    },
  },
};
