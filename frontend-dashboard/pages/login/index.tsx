import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import React, { useState } from 'react';

import { useUserContext } from '../../context/authContext';
import styles from '../../styles/Login.module.css';

interface Values {
  email: string;
  password: string;
}

interface Errors {
  email: string | null;
  password: string | null;
}

const Login: NextPage = () => {
  const [values, setValues] = useState<Values>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<Errors>({
    email: null,
    password: null
  });

  const { setUser } = useUserContext();

  const handleChange = (value: string, key: string) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleError = (errorMessage: string | null, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  // misschien exporten naar utills folder.
  const validateInput = () => {
    let isValid = true;
    if (!values.email) {
      handleError('Vul aub een e-mail adres in', 'email');
      isValid = false;
    }

    if (!values.email.match(/\S+@\S+\.\S+/)) {
      handleError('Vul aub een geldig e-mail adres in', 'email');
      isValid = false;
    }

    if (!values.password) {
      handleError('Vul aub een wachtwoord in', 'password');
      isValid = false;
    }

    return isValid;
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateInput()) {
      return;
    }

    const response = await fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      return handleError(responseData.message, 'email');
    }

    setUser({
      email: responseData.admin.email,
      name: responseData.admin.name
    });

    return Router.push('/dashboard');
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.login__container}>
        <div className={styles.login__left}>
          <div className={styles.login__info}>
            <h4 className={styles.login__header}>Login</h4>
            <p className={styles.login__paragraph}>
              Log in om toegang te krijgen tot het dashboard.
            </p>
          </div>

          <form className={styles.login__input} onSubmit={submitHandler}>
            {errors.email && <p>{errors.email}</p>}
            <input
              className={styles.login__input_field}
              onChange={(e) => handleChange(e.currentTarget.value, 'email')}
              onFocus={() => {
                handleError(null, 'email');
              }}
              value={values.email}
              name="email"
              type="email"
              placeholder="Email"
            />

            {errors.password && <p>{errors.password}</p>}

            <input
              className={styles.login__input_field}
              onChange={(e) => handleChange(e.currentTarget.value, 'password')}
              onFocus={() => {
                handleError(null, 'password');
              }}
              value={values.password}
              name="password"
              type="password"
              placeholder="Wachtwoord"
            />
            <button type="submit" className={styles.login__input_button}>
              Login
            </button>
            <div className={styles.login__options}>
              <div className={styles.line} />
              <p className="text">Of</p>
              <div className={styles.line} />
            </div>
          </form>

          <div className={styles.login__forgot}>
            <p>Wachtwoord vergeten?</p>
          </div>
        </div>
        <div className={styles.login__right}></div>
      </div>
    </>
  );
};

export default Login;
