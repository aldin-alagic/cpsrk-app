import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Section from "../../components/Section/Section";
import Loading from "./../../components/Loading/Loading";
import {
  Title,
  Form,
  FormRow,
  CheckboxWrapper,
  InputLabel,
  InputText,
  InputCheckbox,
  InputError,
  ButtonSubmit,
} from "../../lib/style/generalStyles";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isAdmin: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .min("Password must be at least 8 characters long")
        .required("Email is required"),
      passwordConfirmation: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
      ),
    }),

    onSubmit: (values) => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        alert(JSON.stringify(values));
      }, 1000);
    },
  });

  return (
    <>
      <Title>Register</Title>
      <Section withoutTopPadding>
        {!isLoading ? (
          <Form onSubmit={formik.handleSubmit}>
            <FormRow>
              <InputLabel htmlFor="firstName">First name</InputLabel>
              <InputText
                id="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <InputError>{formik.errors.firstName}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="lastName">Last name</InputLabel>
              <InputText
                id="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <InputError>{formik.errors.lastName}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputText
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <InputError>{formik.errors.email}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="password">Password</InputLabel>
              <InputText
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <InputError>{formik.errors.password}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="passwordConfirmation">
                Confirm password
              </InputLabel>
              <InputText
                id="passwordConfirmation"
                type="password"
                {...formik.getFieldProps("passwordConfirmation")}
              />
              {formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation && (
                  <InputError>{formik.errors.passwordConfirmation}</InputError>
                )}
            </FormRow>
            <FormRow>
              <CheckboxWrapper>
                <InputCheckbox
                  id="isAdmin"
                  type="checkbox"
                  {...formik.getFieldProps("isAdmin")}
                />
                <InputLabel htmlFor="isAdmin" isCheckbox>
                  Register as Admin
                </InputLabel>
              </CheckboxWrapper>
            </FormRow>
            <FormRow>
              <ButtonSubmit type="submit">Register</ButtonSubmit>
            </FormRow>
          </Form>
        ) : (
          <Loading />
        )}
      </Section>
    </>
  );
};

export default Register;
