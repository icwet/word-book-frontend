import React, { FC } from "react";
import { Font } from "components/Font";
import { Text } from "components/Text";
import { TextDefaultTheme } from "components/Text/Theme";
import { IconUserTheme, IconPlusTheme } from "components/Icon/Theme";
import { Icon } from "../Icon";

export const Login: FC = () => {
  return (
    <div>
      <Font />

      <Icon theme={IconUserTheme} />
      <Icon theme={IconPlusTheme} />
      <Text theme={TextDefaultTheme}>123123sdfaksjg;aoiefh</Text>
      <Text theme={TextDefaultTheme}>2asfcaecse</Text>
    </div>
  );
};
