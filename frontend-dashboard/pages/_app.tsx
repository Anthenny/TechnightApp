import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { userContext } from '../context/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // TODO vraag hulp hiermee ( ik defineer al de init waarde in authcontext)
  const [user, setUser] = useState({
    name: undefined,
    email: undefined
  });

  const fetchUser = () => {
    console.log('Ik haalde juiste user op');
  };

  const editUser = () => {
    console.log('Ik edit de juiste user');
  };

  const removeUser = () => {
    console.log('ik verwijder de juiste user');
  };

  return (
    <userContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        fetchUser,
        editUser,
        removeUser,
        user,
        setUser
      }}
    >
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
