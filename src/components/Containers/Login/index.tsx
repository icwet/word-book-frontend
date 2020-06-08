// Vendor
import React, { FC, useEffect, useState } from "react";
// import { fetchTestData } from "./Actions";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
// Components
import { Text } from "components/Presentation/Text";
import { Icon } from "components/Presentation/Icon";
import { Button } from "components/Presentation/Button";
import { Input } from "components/Presentation/Input";
import { Layout } from "components/Presentation/Layout";
import { Section } from "components/Presentation/Section";
import { Popup } from "components/Presentation/Popup";
import { Modal } from "components/Presentation/Modal";
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
  interface MyFormValues {
    email: string;
    username: string;
    password: string;
  }
  const initialValues: MyFormValues = { email: "", username: "", password: "" };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

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
      <Modal>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form>
              <Section layout="titlePh">
                <Text size="l">Sign up for learn a words</Text>
                <Text size="l" color="disabled">
                  Enter your email and think up password.
                </Text>
              </Section>
              <Section layout="inputs">
                <Field name="email">
                  {(props: FieldProps) => (
                    <Input
                      {...props.field}
                      themeSize="xl"
                      placeholderText="Email"
                    />
                  )}
                </Field>
                {formik.errors.email && formik.touched.email && (
                  <div>{formik.errors.email}</div>
                )}
                <Field name="name">
                  {(props: FieldProps) => (
                    <Input
                      {...props.field}
                      themeSize="xl"
                      placeholderText="Name"
                    />
                  )}
                </Field>
                <Field name="password">
                  {(props: FieldProps) => (
                    <Input
                      {...props.field}
                      themeSize="xl"
                      placeholderText="Password"
                    />
                  )}
                </Field>
              </Section>
              <Section layout="labelButton">
                <Text size="s">
                  Продолжая, вы подтверждаите, что ознакомились с Политикой
                  конфиденциальности и согласны с Условиям работы на платформе
                </Text>
                <Button size="l">Next</Button>
              </Section>
            </Form>
          )}
        </Formik>
      </Modal>
    </Layout>
  );
};
