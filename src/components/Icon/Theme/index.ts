import { IconThemeTypes } from "styled-components";
import user from "../Images/plus-circle.svg";

export const IconDefaultTheme: IconThemeTypes = {
  position: "inherit",
  top: "inherit",
  left: "inherit",
  right: "inherit",
  bottom: "inherit",
  margin: "inherit",
  width: "20px",
  height: "20px",
  background: "url('')",
};

export const IconUserTheme: IconThemeTypes = {
  ...IconDefaultTheme,
  background: `url(${user}) center/contain no-repeat`,
};
