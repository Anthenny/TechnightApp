import { NextPage } from 'next';
import React, { useState } from 'react';
import { useUserContext } from '../../context/authContext';
import { useModalContext } from '../../context/modalContext';
import styles from '../../styles/Modal.module.css';

interface Values {
  gebruiker: string;
  email: string;
  telefoonnummer: number | undefined;
}

const Modal: NextPage = () => {
  const { modal, setModal } = useModalContext();
  const { user, setUser, editUser } = useUserContext();

  const [values, setValues] = useState<Values>({
    gebruiker: '',
    email: '',
    telefoonnummer: undefined
  });

  const modalHandler = () => {
    setModal(false);
  };

  const handleChange = (value: string, key: string) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // check inputs met validate functie
    // const gebruiker = values.gebruiker;
    // const email = values.email;
    // const telefoonnummer = values.telefoonnummer;

    // setUser({ gebruiker, email, telefoonnummer });
    // setModal(false);
    console.log('er is een nieuwe user aangemaakt');
  };

  return (
    <>
      {modal && (
        <div className={styles.modal__background}>
          <div className={styles.modal__box}>
            <div className={styles.box__header}>
              <div className={styles.box__close}>
                <p onClick={modalHandler}>X</p>
              </div>
              <h1>Voeg iemand toe!</h1>
            </div>

            <form className={styles.form__container} onSubmit={submitHandler}>
              <div className={styles.form__item}>
                <p>Gebruiker</p>
                <input
                  type="text"
                  onChange={(e) =>
                    handleChange(e.currentTarget.value, 'gebruiker')
                  }
                  value={values.gebruiker}
                />
              </div>
              <div className={styles.form__item}>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => handleChange(e.currentTarget.value, 'email')}
                  value={values.email}
                />
              </div>
              <div className={styles.form__item}>
                <p>Telefoonnummer</p>
                <input
                  type="text"
                  onChange={(e) =>
                    handleChange(e.currentTarget.value, 'telefoonnummer')
                  }
                  value={values.telefoonnummer}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
