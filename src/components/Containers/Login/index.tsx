// Vendor
import React, { FC } from "react";
import { fetchTestData } from "./Actions";
// Components
import { Text } from "components/Presentation/Text";
import { Icon } from "components/Presentation/Icon";
import { Button } from "components/Presentation/Button";
import { Input } from "components/Presentation/Input";
import { useDispatch } from "react-redux";

export const Login: FC = () => {
  const dispatch = useDispatch();

  async function testFetch() {
    try {
      await Promise.all([dispatch(fetchTestData())]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Text>WordBook</Text>
      <Icon image="user" />
      <Input placeholderText="Search..." />
      <Button onClick={() => testFetch()}>test ping</Button>
    </div>
  );
};
