import { createContext, useContext, useState } from 'react';

type User = {
  email: string | undefined;
  name: string | undefined;
};

// This file is responsible for the global state of the components that use this userContext.
// Every component that makes use of userContext is allowed to see the values of the variables end make use of the functions described in this file.
export type userContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: {
    name: string | undefined;
    email: string | undefined;
  };
  setUser: (user: User) => void;
};

// Define the initial values of useContext
export const userContext = createContext<userContextData>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  user: {
    name: undefined,
    email: undefined
  },
  setUser: (user: User) => null
});

export const useUserContext = () => useContext(userContext);
