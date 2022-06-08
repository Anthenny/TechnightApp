import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import React, { useState } from 'react';
import { config } from '../config/config';

import { useUserContext } from '../context/authContext';
import styles from '../styles/Login.module.css';
import { useValidate } from '../hooks/validation-hook';

interface LoginInputValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [values, setValues] = useState<LoginInputValues>({
    email: '',
    password: ''
  });

  const { user, setUser } = useUserContext();

  const { error, setError, validateInputLogin, clearError } = useValidate();

  const handleChange = (value: string, key: string) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = values.email;
    const password = values.password;

    if (!validateInputLogin(email, password)) {
      return;
    } 

    const response = await fetch(`${config.API_URL}/login`, {
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
      return setError(responseData.message);
    }

    setUser({
      email: responseData.data.admin.email,
      name: responseData.data.admin.name,
      token: responseData.token
    });

    return Router.push('/dashboard');
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/developer-favicon.png' />
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
            {error && <p>{error}</p>}
            <input
              className={styles.login__input_field}
              onChange={(e) => handleChange(e.currentTarget.value, 'email')}
              onFocus={clearError}
              value={values.email}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.login__input_field}
              onChange={(e) => handleChange(e.currentTarget.value, 'password')}
              onFocus={clearError}
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
