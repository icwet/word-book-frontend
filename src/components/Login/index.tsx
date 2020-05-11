import React from "react";
import { Text } from "components/Text";
import { TextDefaultTheme } from "components/Text/Theme";
import { IconUserTheme } from "components/Icon/Theme";
import { Icon } from "../Icon";

export const Login = () => {
  return (
    <div>
      <Text theme={TextDefaultTheme}>
        <Icon theme={IconUserTheme} />
      </Text>
    </div>
  );
};
