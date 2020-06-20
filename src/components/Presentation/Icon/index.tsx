import styled, { DefaultTheme } from "styled-components";

export type IconSize = "s" | "m" | "l";
export type IconPicture =
  | "user"
  | "more"
  | "back"
  | "close"
  | "add"
  | "emojiHmm";

export interface IconProps {
  readonly size?: IconSize;
  readonly image: IconPicture;
}

const switchCSSProp: Function = (
  theme: DefaultTheme,
  size: string,
  prop: keyof typeof theme.Icon.sizes.s
) => {
  switch (size) {
    case "s":
      return theme.Icon.sizes.s[prop];
    case "m":
      return theme.Icon.sizes.m[prop];
    case "l":
      return theme.Icon.sizes.l[prop];
    default:
      return theme.Icon.sizes.s[prop];
  }
};

export const Icon = styled.div<IconProps>`
  width: ${({ theme, size }) => switchCSSProp(theme, size, "width")};
  height: ${({ theme, size }) => switchCSSProp(theme, size, "height")};
  background: url(${({ theme, image }) => {
      switch (image) {
        case "user":
          return theme.Icon.user;
        case "back":
          return theme.Icon.back;
        case "more":
          return theme.Icon.more;
        case "close":
          return theme.Icon.close;
        case "add":
          return theme.Icon.add;
        case "emojiHmm":
          return theme.Icon.emojiHmm;
      }
    }})
    center/contain no-repeat;
`;
