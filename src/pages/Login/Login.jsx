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
  SuccessMessage,
} from "../../lib/style/generalStyles";
import { loginUser } from './../../api/login';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isRequestFinished, setIsRequestFinished] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .min(8,"Password must be at least 8 characters long")
        .required("Email is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      setIsRequestFinished(false);

      const user = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        isAdmin: values.isAdmin,
      };

      loginUser(user)
        .then((result) => {
          console.log(result);
          resetForm({});
          setIsError(false);
          setSuccessMessage("You've logged in.");
          setTimeout(() => {
            setIsRequestFinished(true);
          }, 4000);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
          setSuccessMessage("Something went wrong.");
        })
        .finally(() => {
          setIsLoading(false);
          setIsRequestFinished(true);
        });
    },
  });

  return (
    <>
      <Title>Login</Title>
      <Section withoutTopPadding>
        {isRequestFinished && (
          <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
        )}
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
