export interface SectionTheme {
  type: {
    header: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    search: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    button: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    buttons: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    imageText: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    popup: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    modal: {
      display: string;
      grid: string;
      padding?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
    };
    groupNumber: {
      display: string;
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
      grid: "auto-flow / auto 1fr auto",
      padding: "16px",
      justifyContent: "",
      justifyItems: "center",
      alignContent: "",
      alignItems: "center",
    },
    search: {
      display: "grid",
      grid: "",
      padding: "0 16px 16px 16px",
      justifyContent: "",
      justifyItems: "",
      alignContent: "",
      alignItems: "",
    },
    button: {
      display: "grid",
      grid: "",
      padding: "16px",
      justifyContent: "",
      justifyItems: "",
      alignContent: "",
      alignItems: "",
    },
    buttons: {
      display: "",
      grid: "",
      padding: "",
      justifyContent: "",
      justifyItems: "",
      alignContent: "",
      alignItems: "",
    },
    imageText: {
      display: "grid",
      grid: "112px 24px 48px / 1fr",
      padding: "",
      justifyContent: "",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "",
    },
    popup: {
      display: "",
      grid: "",
      padding: "",
      justifyContent: "",
      justifyItems: "",
      alignContent: "",
      alignItems: "",
    },
    modal: {
      display: "",
      grid: "",
      padding: "",
      justifyContent: "",
      justifyItems: "",
      alignContent: "",
      alignItems: "",
    },
    groupNumber: {
      display: "",
      grid: "",
      padding: "",
      justifyContent: "",
      justifyItems: "",
      alignContent: "",
      alignItems: "",
    },
  },
};
