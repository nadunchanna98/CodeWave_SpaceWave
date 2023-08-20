import React from 'react'
import './SignUp.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function Login() {
  const initialValues = {
    email: '',
    password: ''
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
});

const handleSignUp = (values) => {
    console.log('Form data', values);

    const requestData = {
        email: values.email,
        password: values.password,
    };

    // Make the POST request to your backend API
    axios
        .post('http://localhost:8080/api/user/login', requestData)
        .then((response) => {
            console.log(response.data);
            alert('User registered successfully!');
            // Perform any navigation or other actions here
        })
        .catch((error) => {
            console.log(error);
            alert('User registration failed!');
        })
        .finally(() => {
            // Always executed.
        });
};

return (

    <div className="signup-form">
        <h2>LOGIN</h2>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
        >
            {({ handleSubmit  }) => (
                <Form>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <button className="signup-button" type="submit" >
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);
}

export default Login;