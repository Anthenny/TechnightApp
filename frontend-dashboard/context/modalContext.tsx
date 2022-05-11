import { createContext, useContext } from 'react';

export type modalContent = {
  modal: boolean;
  setModal: (m: boolean) => void;
};
export const ModalContext = createContext<modalContent>({
  modal: false,
  setModal: () => {}
});
export const useModalContext = () => useContext(ModalContext);
