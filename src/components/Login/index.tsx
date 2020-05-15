import React, { FC } from "react";
import { Text } from "components/Text";
import { Icon } from "../Icon";
import { Input } from "../Input";

export const Login: FC = () => {
  return (
    <div>
      <Text>WordBook</Text>
      <Icon image="user" />
      <Input />
    </div>
  );
};
