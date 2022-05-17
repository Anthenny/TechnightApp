import { useState } from 'react';

export const useValidate = () => {
  const [error, setError] = useState<string | null>(null);
  let isValid = true;

  const validateInputModal = (
    fullName: string,
    email: string,
    phoneNumber: string
  ) => {
    if (!fullName) {
      isValid = false;
      setError('Vul aub een volledige naam in');
    }

    if (!email) {
      isValid = false;
      setError('Vul aub een e-mail adres in');
    }

    if (!email.match(/\S+@\S+\.\S+/)) {
      isValid = false;
      setError('Vul aub een geldig e-mail adres in');
    }

    if (!phoneNumber) {
      isValid = false;
      setError('Vul aub een telefoonnummer in');
    }
    return isValid;
  };

  const validateInputLogin = async (email: string, password: string) => {
    let isValid = true;
    if (!email) {
      isValid = false;
      return setError('Vul aub een e-mail adres in');
    }

    if (!email.match(/\S+@\S+\.\S+/)) {
      isValid = false;
      return setError('Vul aub een geldig e-mail adres in');
    }

    if (!password) {
      isValid = false;
      return setError('Vul aub een wachtwoord in');
    }
    console.log(isValid);
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
