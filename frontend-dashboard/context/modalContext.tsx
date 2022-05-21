import { createContext, useContext } from 'react';

export type modalContent = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  editModal: boolean;
  setEditModal: (modal: boolean) => void;
  editId: string | undefined;
  setEditId: (id: string | undefined) => void;
};
export const ModalContext = createContext<modalContent>({
  modal: false,
  setModal: () => {},
  editModal: false,
  setEditModal: () => {},
  editId: undefined,
  setEditId: () => {}
});

export const useModalContext = () => useContext(ModalContext);
