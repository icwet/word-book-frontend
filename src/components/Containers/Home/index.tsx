// Vendor
import React from "react";
// Components
import { Section } from "components/Presentation/Section";
import { Icon } from "components/Presentation/Icon";
import { Text } from "components/Presentation/Text";
import { Input } from "components/Presentation/Input";
import { Button } from "components/Presentation/Button";
import { Layout } from "components/Presentation/Layout";

export const Home = () => {
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
        <Text size="s">You don't have words yet</Text>
        <Text size="s" color="disabled">
          Create a self new word set or choose from catalog
        </Text>
      </Section>
      <Section layout="button">
        <Button>Add a words set</Button>
      </Section>
    </Layout>
  );
};
