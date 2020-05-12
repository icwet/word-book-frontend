import { IconThemeTypes } from "styled-components";
import user from "../Images/user.svg";
import plus from "../Images/plus.svg";
import arrow from "../Images/arrow.svg";

export const IconDefaultTheme: IconThemeTypes = {
  width: "20px",
  height: "20px",
  background: "url('')",
};

export const IconUserTheme: IconThemeTypes = {
  ...IconDefaultTheme,
  background: `url(${user}) center/contain no-repeat`,
};

export const IconPlusTheme: IconThemeTypes = {
  ...IconDefaultTheme,
  background: `url(${plus}) center/contain no-repeat`,
};

export const IconArrowTheme: IconThemeTypes = {
  ...IconDefaultTheme,
  background: `url(${arrow}) center/contain no-repeat`,
};
