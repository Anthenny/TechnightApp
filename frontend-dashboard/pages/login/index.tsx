import { NextPage } from 'next';
import Head from 'next/head';

import styles from '../../styles/Login.module.css';
import technightImg from '../../public/Login-technight.png';
import Image from 'next/image';

const Login: NextPage = () => {
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

          <form className={styles.login__input}>
            <input
              className={styles.login__input_field}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.login__input_field}
              type="password"
              placeholder="Wachtwoord"
            />
            <button className={styles.login__input_button}>Login</button>
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
