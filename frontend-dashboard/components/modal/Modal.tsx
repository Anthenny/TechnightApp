import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { config } from '../../config/config';
import { useModalContext } from '../../context/modalContext';
import styles from '../../styles/Modal.module.css';
import useHttp from '../../hooks/http-hook';
import { useValidate } from '../../hooks/validation-hook';

interface FormInputValues {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const Modal: NextPage = () => {
  const { modal, setModal, editModal, setEditModal, editId, setEditId } =
    useModalContext();
  const { errorHttp, sendRequest, clearErrorHttp } = useHttp();
  const [values, setValues] = useState<FormInputValues>({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const { error, setError, validateInputModal, clearError } = useValidate();

  const fetchOneParticipant = async (id: string | undefined) => {
    try {
      const responseData = await sendRequest(`${config.API_URL}/form/${id}`);
      setValues({
        fullName: responseData.data.formData.name,
        email: responseData.data.formData.email,
        phoneNumber: responseData.data.formData.phoneNumber
      });
    } catch (err) {}
  };

  useEffect(() => {
    if (editModal) {
      fetchOneParticipant(editId);
    }
  }, [editModal]);

  const clearInput = () => {
    setValues({
      fullName: '',
      email: '',
      phoneNumber: ''
    });
  };

  const modalHandler = () => {
    clearInput();
    setModal(false);
    setEditModal(false);
  };

  const handleChange = (value: string, key: string) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const postParticipant = async (
    fullName: string,
    email: string,
    phoneNumber: string
  ) => {
    try {
      await sendRequest(
        `${config.API_URL}/form`,
        'POST',
        {
          'Content-Type': 'application/json'
        },
        JSON.stringify({
          name: fullName,
          email,
          phoneNumber
        })
      );

      clearInput();

      setModal(false);
    } catch (err) {}
  };

  const patchParticipant = async (
    fullName: string,
    email: string,
    phoneNumber: string,
    id: string | undefined
  ) => {
    try {
      await sendRequest(
        `${config.API_URL}/form/${id}`,
        'PATCH',
        {
          'Content-Type': 'application/json'
        },
        JSON.stringify({
          name: fullName,
          email,
          phoneNumber
        })
      );
    } catch (err) {}
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { fullName, email, phoneNumber } = values;

    if (!validateInputModal(fullName, email, phoneNumber)) {
      return;
    }

    if (editModal) {
      patchParticipant(fullName, email, phoneNumber, editId);
    }

    if (!editModal) {
      postParticipant(fullName, email, phoneNumber);
    }

    setEditId(undefined);
    clearInput();
    modalHandler();
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
