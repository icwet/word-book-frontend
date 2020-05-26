// Vendor
import React, { FC, useEffect, useState } from "react";
// import { fetchTestData } from "./Actions";
// Components
import { Text } from "components/Presentation/Text";
import { Icon } from "components/Presentation/Icon";
import { Button } from "components/Presentation/Button";
import { Input } from "components/Presentation/Input";
import { Layout } from "components/Presentation/Layout";
import { Section } from "../../Presentation/Section";
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
      <Icon image="user" />
      <Text>WordBook</Text>
      <Icon image="more" />
      <Input icon="search" placeholderText="Search..." />
      <Icon size="l" image="more" />
      <Text size="s">You don't have words yet</Text>
      <Text size="s" color="disabled">
        Create a self new word set or choose from catalog
      </Text>
      <Section>
        <Button>test ping</Button>
      </Section>
    </Layout>
  );
};
