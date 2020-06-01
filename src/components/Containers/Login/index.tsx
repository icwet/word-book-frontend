// Vendor
import React, { FC, useEffect, useState } from "react";
// import { fetchTestData } from "./Actions";
// Components
import { Text } from "components/Presentation/Text";
import { Icon } from "components/Presentation/Icon";
import { Button } from "components/Presentation/Button";
import { Input } from "components/Presentation/Input";
import { Layout } from "components/Presentation/Layout";
import { Section } from "components/Presentation/Section";
import { Popup } from "components/Presentation/Popup";
// import { useDispatch } from "react-redux";

export const Login: FC = () => {
  /*const dispatch = useDispatch();

  async function testFetch() {
    try {
      await Promise.all([dispatch(fetchTestData())]);
    } catch (e) {
      console.log(e);
    }
  }*/

  return (
    <Layout layout="main">
      <Section layout="header">
        <Icon image="user" />
        <Text>WordBook</Text>
        <Icon image="more" />
      </Section>
      <Section layout="search">
        <Input themeSize="s" icon="search" placeholderText="Search..." />
      </Section>
      <Section layout="imageText">
        <Icon size="l" image="emojiHmm" />
        <Text size="l">You don't have words yet</Text>
        <Text size="m" color="disabled">
          Create a self new word set or choose from catalog
        </Text>
      </Section>
      <Popup>
        <Text size="m">Free to learn words</Text>
        <Text size="m" color="disabled">
          append your words to the dictionary or choose from categories
        </Text>
        <Section layout="popup">
          <Button size="m" buttonTheme="alt">
            Sign in
          </Button>
          <Button size="m" buttonTheme="transparent">
            Sign up
          </Button>
        </Section>
      </Popup>
    </Layout>
  );
};
