import "styled-components";

declare module "styled-components" {
  export interface TextThemeTypes {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    color: string;
  }
  export interface IconThemeTypes {
    position: string;
    top: string;
    left: string;
    right: string;
    bottom: string;
    width: string;
    height: string;
    margin: string | number;
    background: string;
  }
}
