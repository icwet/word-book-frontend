// Vendor
import React, { FC } from "react";
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
// State
import { AppDispatch, RootState } from "store";
import { connect, ConnectedProps } from "react-redux";
import { getEmailAccess, sendRegistrationData, toggleModal } from "./Actions";
import { RegistrationFormValues } from "./Actions/types";

interface LoginProps extends PropsFromRedux {}

const Login: FC<LoginProps> = ({
  modal,
  email,
  emailAccess,
  emailAccessLoading,
  checkEmail,
  toggleModal,
  sendRegistrationData,
}) => {
  const initialValues: RegistrationFormValues = {
    email: "",
    name: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });
  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    } else if (!emailAccessLoading && email !== value) {
      checkEmail(value);
      if (emailAccess?.result) {
        error = "This email is already in use";
      }
    }
    return error;
  };

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
          <Button
            size="m"
            buttonTheme="transparent"
            onClick={() => toggleModal()}
          >
            Sign up
          </Button>
        </Section>
      </Popup>
      {modal && (
        <Modal type="default" onClose={toggleModal}>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            validateOnBlur
            onSubmit={(values) => {
              sendRegistrationData(values);
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
                  <Field name="email" validate={validateEmail}>
                    {(props: FieldProps) => {
                      return (
                        <Input
                          {...props.field}
                          touched={props.meta.touched}
                          error={props.meta.error}
                          themeSize="xl"
                          placeholderText="Email"
                          type="email"
                        />
                      );
                    }}
                  </Field>
                  <Field name="name">
                    {(props: FieldProps) => (
                      <Input
                        {...props.field}
                        touched={props.meta.touched}
                        error={props.meta.error}
                        themeSize="xl"
                        placeholderText="Name"
                      />
                    )}
                  </Field>
                  <Field name="password">
                    {(props: FieldProps) => (
                      <Input
                        {...props.field}
                        touched={props.meta.touched}
                        error={props.meta.error}
                        themeSize="xl"
                        placeholderText="Password"
                      />
                    )}
                  </Field>
                </Section>
                <Section layout="labelButton">
                  <Text size="s">
                    Продолжая, вы подтверждаите, что ознакомились с 
                    <span style={{ fontWeight: "bold" }}>
                      Политикой конфиденциальности
                    </span>
                    и согласны с 
                    <span style={{ fontWeight: "bold" }}>
                      Условиям работы на платформе
                    </span>
                  </Text>
                  <Button type="submit" size="l">
                    Next
                  </Button>
                </Section>
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => {
  const { emailAccessLoading, emailAccess, email, modal } = state.Login;
  return {
    emailAccessLoading,
    emailAccess,
    email,
    modal,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    checkEmail: (email: string) => dispatch(getEmailAccess(email)),
    toggleModal: () => dispatch(toggleModal()),
    sendRegistrationData: (data: RegistrationFormValues) =>
      dispatch(sendRegistrationData(data)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Login);
