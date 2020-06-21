export interface SectionTheme {
  type: {
    header: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    search: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    button: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    buttons: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    imageText: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    titlePh: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    popup: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    modal: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    groupNumber: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    inputs: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    labelButton: {
      display: string;
      gap: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
  };
}

export const Section: SectionTheme = {
  type: {
    header: {
      display: "grid",
      gap: "",
      grid: "auto-flow / auto 1fr auto",
      padding: "16px",
      justifyItems: "center",
      alignItems: "center",
    },
    search: {
      display: "grid",
      gap: "",
      grid: "",
      padding: "0 16px 16px 16px",
    },
    button: {
      display: "grid",
      gap: "",
      grid: "",
      padding: "16px",
    },
    buttons: {
      display: "",
      gap: "",
      grid: "",
      padding: "",
    },
    imageText: {
      display: "grid",
      gap: "",
      grid: "112px 32px 48px / 1fr",
      padding: "16px",
      justifyItems: "center",
      alignContent: "center",
    },
    titlePh: {
      display: "grid",
      gap: "4px",
      grid: "",
      padding: "",
    },
    popup: {
      display: "grid",
      gap: "",
      grid: "1fr / 1.5fr 1fr",
      padding: "",
    },
    modal: {
      display: "",
      gap: "",
      grid: "",
      padding: "",
    },
    groupNumber: {
      display: "",
      gap: "",
      grid: "",
      padding: "",
    },
    inputs: {
      display: "grid",
      gap: "16px",
      grid: "auto-flow / 1fr",
      padding: "24px 0 24px 0",
    },
    labelButton: {
      display: "grid",
      gap: "16px",
      grid: "",
      padding: "",
    },
  },
};
