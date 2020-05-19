// Vendor
import React, { FC, useState } from "react";
import { PingResult } from "api/types";
import { getPing } from "api/index";
import { fetchTestData } from "../App/Actions";
// Components
import { Text } from "components/Text";
import { Icon } from "components/Icon";
import { Input } from "components/Input";
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
      <button onClick={() => testFetch()}>test ping</button>
    </div>
  );
};
