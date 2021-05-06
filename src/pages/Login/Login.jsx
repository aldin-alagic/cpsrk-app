import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Section from "../../components/Section/Section";
import Loading from "./../../components/Loading/Loading";
import {
  Title,
  Form,
  FormRow,
  InputLabel,
  InputText,
  InputError,
  ButtonSubmit,
} from "../../lib/style/generalStyles";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .min("Password must be at least 8 characters long")
        .required("Email is required"),
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
      <Title>Login</Title>
      <Section withoutTopPadding>
        {!isLoading ? (
          <Form onSubmit={formik.handleSubmit}>
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
              <ButtonSubmit type="submit">Login</ButtonSubmit>
            </FormRow>
          </Form>
        ) : (
          <Loading />
        )}
      </Section>
    </>
  );
};

export default Login;
