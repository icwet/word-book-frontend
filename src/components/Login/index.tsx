import React, { FC } from "react";
import { Text } from "components/Text";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { baseAuth, baseUrl } from "../../config";

export const Login: FC = () => {
  const testApiRequest = async () => {
    const response = await fetch(`${baseUrl}/ping`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Basic ${baseAuth}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    return await response.json();
  };

  return (
    <div>
      <Text>WordBook</Text>
      <Icon image="user" />
      <Input />
      <button onClick={() => testApiRequest()}>test</button>
    </div>
  );
};
