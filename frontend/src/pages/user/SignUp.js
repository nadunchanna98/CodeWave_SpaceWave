import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.css'; 
import axios from 'axios';


const SignUp = () => {
    const initialValues = {
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phoneNumber: Yup.string()
            .required('Mobile Number is required')
            .matches(/^\d{12}$/, 'Phone Number must be exactly 12 digits'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zipcode: Yup.string().required('Zipcode is required'),
        country: Yup.string().required('Country is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),

    });

    const handleSignUp = (values) => {
        console.log('Form data', values);

        const requestData = {
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: values.phoneNumber,
            address: values.address,
            city: values.city,
            state: values.state,
            zipcode: values.zipcode,
            country: values.country,
            email: values.email,
            password: values.password,
        };

        // Make the POST request to your backend API
        axios
            .post('http://localhost:8080/api/user', requestData)
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
            <h2>Sign Up</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSignUp}

            >
                {({ handleSubmit  }) => (
                    <Form>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" id="firstName" name="firstName" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" id="lastName" name="lastName" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field type="number" id="phoneNumber" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="address">Address</label>
                            <Field type="text" id="address" name="address" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="city">City</label>
                            <Field type="text" id="city" name="city" />
                            <ErrorMessage name="city" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="state">State</label>
                            <Field type="text" id="state" name="state" />
                            <ErrorMessage name="state" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="zipcode">Zipcode</label>
                            <Field type="number" id="zipcode" name="zipcode" />
                            <ErrorMessage name="zipcode" component="div" className="error" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="country">Country</label>
                            <Field type="text" id="country" name="country" />
                            <ErrorMessage name="country" component="div" className="error" />
                        </div>
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
                        <div className="input-field">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field type="password" id="confirmPassword" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                        <button className="signup-button" type="submit" >
                            Sign Up
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;
