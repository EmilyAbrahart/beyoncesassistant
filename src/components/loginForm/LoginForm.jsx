import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
// import * as Yup from 'yup';
import { login } from "../../state/actions/auth";
import { WhiteDiv, MainButton, ErrorContainer } from "../../styles";
import Spinner from "../../styles/Spinner";

function FormTemplate({
  touched,
  errors,
  auth: {error, isFetching},
  game: { isFetchingInitial },
}) {
  return (
    <WhiteDiv>
      <h1> Log In</h1>
      {isFetching || isFetchingInitial ? (
        <Spinner />
      ) : (
        <Form className="formik-form">
          <div className="field-container">
            <div className="input-title">Username</div>
            <Field type="text" name="username" />
            {touched.username && errors.username}
          </div>
          <div className="field-container">
            <div className="input-title">Password</div>
            <Field type="password" name="password" />
            {touched.password && errors.password}
          </div>
          {// If credentials are invalid:
          error && error.status === 400 && (
            <ErrorContainer>
            {error.data.non_field_errors.join(' ')}
            </ErrorContainer>
          )}
          ;
          <MainButton type="submit" className="form-button">
            Log in
          </MainButton>
        </Form>
      )}
      {isFetching || isFetchingInitial ? null : (
        <div className="login-option">
          <Link to="/register">Register</Link>
        </div>
      )}
    </WhiteDiv>
  );
}
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  //   validationSchema: Yup.object().shape({
  //     username: Yup.string().required(
  //       "Username is required"
  //     ),
  //     password: Yup.string()
  //       .min(
  //         3,
  //         "Try again."
  //       )
  //       .required
  //   }),

  handleSubmit(values, { props }) {
    props.login(values, props.history);
  },
})(FormTemplate);

export default connect((state) => state, { login })(FormikLoginForm);
