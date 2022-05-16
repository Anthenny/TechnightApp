import { NextPage } from 'next';
import React, { useState } from 'react';
import { config } from '../../config/config';
import { useModalContext } from '../../context/modalContext';
import styles from '../../styles/Modal.module.css';

interface Values {
  name: string;
  email: string;
  telefoonnummer: number | undefined;
}

const Modal: NextPage = () => {
  const { modal, setModal } = useModalContext();
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    telefoonnummer: undefined
  });

  const modalHandler = () => {
    setModal(false);
  };

  const handleChange = (value: string, key: string) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(`${config.API_URL}/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phoneNumber: values.telefoonnummer
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      return console.log(responseData.message, 'email');
    }

    setModal(false);
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
                <p>Naam</p>
                <input
                  type="text"
                  placeholder="Volledige naam"
                  onChange={(e) => handleChange(e.currentTarget.value, 'name')}
                  value={values.name}
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
                  placeholder="telefoonnummer"
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
