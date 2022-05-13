import { createContext, useContext, useState } from 'react';

export type userContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: {
    name: string | undefined;
    email: string | undefined;
  };
  setUser: (user: any) => void;
  fetchUser: () => void;
  editUser: () => void;
  removeUser: (userId: number) => void;
};

// initial values
export const userContext = createContext<userContextData>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  user: {
    name: undefined,
    email: undefined
  },
  setUser: () => null,
  fetchUser: () => null,
  editUser: () => null,
  removeUser: () => null
});

export const useUserContext = () => useContext(userContext);
