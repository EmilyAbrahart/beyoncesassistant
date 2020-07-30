import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { register } from "../../state/actions/auth";
import { WhiteDiv, MainButton, mobile, ErrorContainer } from "../../styles";
import Spinner from "../../styles/Spinner";

function FormTemplate({
  touched,
  errors,
  auth: { isFetching, error },
  game: { isFetchingInitial },
}) {
  return (
    <RegisterContainer>
      <h1> Register</h1>
      {isFetching || isFetchingInitial ? (
        <Spinner />
      ) : (
        <Form className="formik-form">
          <div className="field-container">
            <div className="input-title">Username</div>
            <Field type="text" name="username" />
            {touched.username && errors.username}
            {error.username && (
              <ErrorContainer>{error.username.join(" ")}</ErrorContainer>
            )}
          </div>
          <div className="field-container">
            <div className="input-title">Password</div>

            <Field type="password" name="password1" />
            {touched.password1 && errors.password1}
            {error.password1 && (
              <ErrorContainer>{error.password1.join(" ")}</ErrorContainer>
            )}
          </div>
          <div className="field-container">
            <div className="input-title">Confirm Password</div>
            <Field type="password" name="password2" />
            {touched.password2 && errors.password2}
            {error.password2 && (
              <ErrorContainer>{error.password2.join(" ")}</ErrorContainer>
            )}
          </div>

          <MainButton type="submit" className="form-button">
            Register
          </MainButton>
        </Form>
      )}
      {!isFetching && !isFetchingInitial && (
        <div className="login-option">
          <Link to="/login">Log in</Link>
        </div>
      )}
    </RegisterContainer>
  );
}
const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return {
      username: username || "",
      password1: password1 || "",
      password2: password2 || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(" Username is required "),
    password1: Yup.string()
      .min(8, "You password must have min 8 characters. Try again.")
      .required("A password is required"),
    password2: Yup.string()
      .min(8, "You password must have min 8 characters. Try again.")
      .required("A password is required"),
  }),
  handleSubmit(values, { props }) {
    props.register(values, props.history);
  },
})(FormTemplate);

export default connect((state) => state, { register })(FormikRegisterForm);

const RegisterContainer = styled(WhiteDiv)`
  height: 600px;

  @media ${mobile} {
    form input {
      margin-bottom: 0px;
    }
  }
`;
