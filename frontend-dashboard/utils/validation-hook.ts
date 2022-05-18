import { useState } from 'react';

export const useValidate = () => {
  const [error, setError] = useState<string | null>(null);
  let isValid = true;

  const checkEmail = (email: string) => {
    if (!email) {
      return false;
    }

    // TODO een check met een library uitvoeren zodat de email beter gecontroleerd wordt zie: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
    if (!email.match(/\S+@\S+\.\S+/)) {
      return false;
    }

    return true;
  };

  const validateInputModal = (
    fullName: string,
    email: string,
    phoneNumber: string
  ) => {
    if (!fullName) {
      isValid = false;
      setError('Vul aub een volledige naam in');
    }

    if (!checkEmail(email)) {
      isValid = false;
      return setError('Vul aub een geldig e-mail adres in');
    }

    if (!phoneNumber) {
      isValid = false;
      setError('Vul aub een telefoonnummer in');
    }
    return isValid;
  };

  const validateInputLogin = async (email: string, password: string) => {
    let isValid = true;

    if (!checkEmail(email)) {
      isValid = false;
      return setError('Vul aub een geldig e-mail adres in');
    }

    if (!password) {
      isValid = false;
      return setError('Vul aub een wachtwoord in');
    }
    return isValid;
  };

  const clearError = () => {
    setError(null);
  };

  return {
    error,
    isValid,
    setError,
    validateInputLogin,
    validateInputModal,
    clearError
  };
};
