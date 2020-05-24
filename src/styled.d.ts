import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    Text: {
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
        current: string;
        alt: string;
      };
      lineHeight: {
        s: string;
        m: string;
        l: string;
        xl: string;
      };
    };
    Icon: {
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
    Input: {
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
        };
        m: {
          width?: string;
          height?: string;
          padding: string;
          borderRadius: string;
        };
        l: {
          width?: string;
          height?: string;
          padding: string;
          borderRadius: string;
        };
        xl: {
          width?: string;
          height?: string;
          padding: string;
          borderRadius: string;
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
    };
    Button: {
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
    };
  }
}
