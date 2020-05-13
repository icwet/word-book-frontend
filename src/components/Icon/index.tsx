import styled from "styled-components";

interface IconProps {
  readonly size?: string;
  readonly image: string;
}

export const Icon = styled.div<IconProps>`
  width: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.icons.sizes.s.width;
      case "m":
        return theme.icons.sizes.m.width;
      case "l":
        return theme.icons.sizes.l.width;
      default:
        return theme.icons.sizes.s.width;
    }
  }};
  height: ${({ theme, size }) => {
    switch (size) {
      case "s":
        return theme.icons.sizes.s.height;
      case "m":
        return theme.icons.sizes.m.height;
      case "l":
        return theme.icons.sizes.l.height;
      default:
        return theme.icons.sizes.s.height;
    }
  }};
  background: url(${({ theme, image }) => {
      switch (image) {
        case "user":
          return theme.icons.user;
        case "back":
          return theme.icons.back;
        case "more":
          return theme.icons.more;
        case "close":
          return theme.icons.close;
        case "add":
          return theme.icons.add;
      }
    }})
    center/contain no-repeat;
`;
