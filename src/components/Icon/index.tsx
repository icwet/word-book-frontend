import styled from "styled-components";

interface IconProps {
  readonly size?: string;
  readonly image: string;
}

export const Icon = styled.div<IconProps>`
  width: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Icon.sizes.s.width;
      case "m":
        return theme.Icon.sizes.m.width;
      case "l":
        return theme.Icon.sizes.l.width;
      default:
        return theme.Icon.sizes.s.width;
    }
  }};
  height: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.Icon.sizes.s.height;
      case "m":
        return theme.Icon.sizes.m.height;
      case "l":
        return theme.Icon.sizes.l.height;
      default:
        return theme.Icon.sizes.s.height;
    }
  }};
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
      }
    }})
    center/contain no-repeat;
`;
