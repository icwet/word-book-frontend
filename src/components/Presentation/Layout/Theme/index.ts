export interface LayoutTheme {
  type: {
    main: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    words: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    collections: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    profile: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    addWords: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    password: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    popup: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
    modal: {
      display: string;
      grid: string;
      height?: string;
      justifyContent?: string;
      justifyItems?: string;
      alignContent?: string;
      alignItems?: string;
      background?: string;
    };
  };
}

export const Layout: LayoutTheme = {
  type: {
    main: {
      display: "grid",
      grid: "auto auto 1fr auto / 1fr",
      height: "100vh",
      background: "",
    },
    words: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
    collections: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
    profile: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
    addWords: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
    password: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
    popup: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
    modal: {
      display: "grid",
      grid: "",
      height: "100vh",
      background: "",
    },
  },
};
