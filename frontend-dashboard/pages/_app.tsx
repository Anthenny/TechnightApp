import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { userContext } from '../context/authContext';

type User = {
  email: string | undefined;
  name: string | undefined;
  token: string | undefined;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // TODO vraag hulp hiermee ( ik defineer al de init waarde in authcontext)
  const [user, setUser] = useState<User>({
    name: undefined,
    email: undefined,
    token: undefined
  });

  return (
    <userContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser
      }}
    >
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
