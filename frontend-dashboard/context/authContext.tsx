import { createContext, useContext, useState } from 'react';

// export type userContent = {
//   gebruiker: string | undefined;
//   email: string | undefined;
//   telefoonnummer: number | undefined;
// }[];

export type userContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: {
    gebruiker: string | undefined;
    email: string | undefined;
    telefoonnummer: number | undefined;
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
    gebruiker: undefined,
    email: undefined,
    telefoonnummer: undefined
  },
  setUser: () => null,
  fetchUser: () => null,
  editUser: () => null,
  removeUser: () => null
});

export const useUserContext = () => useContext(userContext);
