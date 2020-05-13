import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      Roboto: string;
    };
    fontSize: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    color: {
      text: {
        current: string;
        alt: string;
      };
    };
    lineHeight: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    icons: {
      user: string;
      more: string;
      back: string;
      close: string;
      add: string;
      sizes: {
        s: {
          width: string;
          height: string;
        };
        m: {
          width: string;
          height: string;
        };
        l: {
          width: string;
          height: string;
        };
      };
    };
  }
}
