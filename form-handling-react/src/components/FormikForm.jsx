import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(values) => console.log('Submitted with Formik:', values)}
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" />
        <ErrorMessage name="username" component="p" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="p" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="p" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
