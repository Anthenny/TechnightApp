import { NextPage } from 'next';
import React, { useState } from 'react';
import { config } from '../../config/config';
import { useModalContext } from '../../context/modalContext';
import styles from '../../styles/Modal.module.css';
import { useValidate } from '../../utils/validation-hook';

interface Values {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const Modal: NextPage = () => {
  const { modal, setModal } = useModalContext();
  const [values, setValues] = useState<Values>({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const { error, setError, validateInputModal, clearError } = useValidate();

  const modalHandler = () => {
    setModal(false);
  };

  const handleChange = (value: string, key: string) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullName = values.fullName;
    const email = values.email;
    const phoneNumber = values.phoneNumber;

    if (!validateInputModal(fullName, email, phoneNumber)) {
      return;
    }

    const response = await fetch(`${config.API_URL}/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: fullName,
        email,
        phoneNumber
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      return setError(responseData.message);
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
              {error && <p data-testid>{error}</p>}
              <div className={styles.form__item}>
                <p>Naam</p>
                <input
                  type="text"
                  placeholder="Naam"
                  onChange={(e) =>
                    handleChange(e.currentTarget.value, 'fullName')
                  }
                  onFocus={clearError}
                  value={values.fullName}
                />
              </div>
              <div className={styles.form__item}>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => handleChange(e.currentTarget.value, 'email')}
                  onFocus={clearError}
                  value={values.email}
                />
              </div>
              <div className={styles.form__item}>
                <p>Telefoonnummer</p>
                <input
                  type="text"
                  placeholder="telefoonnummer"
                  onChange={(e) =>
                    handleChange(e.currentTarget.value, 'phoneNumber')
                  }
                  onFocus={clearError}
                  value={values.phoneNumber}
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
