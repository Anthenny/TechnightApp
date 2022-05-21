import { useState, useCallback } from 'react';

const useHttp = () => {
  const [errorHttp, setErrorHttp] = useState<String | null>();

  const sendRequest = useCallback(
    async (
      url: string,
      method: string = 'GET',
      headers: any = {},
      body: any = null
    ) => {
      try {
        const response = await fetch(url, {
          method,
          headers,
          body
        });

        const responseData = await response.json();

        if (!response.ok) return setErrorHttp(responseData.message);

        return responseData;
      } catch (err: any) {
        setErrorHttp(err.message);
        throw err;
      }
    },
    []
  );

  const clearErrorHttp = () => {
    setErrorHttp(null);
  };

  return {
    errorHttp,
    sendRequest,
    clearErrorHttp
  };
};

export default useHttp;
