import {useState, useEffect, useDebugValue} from 'react';
import DirectusSDK from '@directus/sdk-js';

// main client instance
const client = new DirectusSDK({
  url: 'https://api.palamago.com.ar/',
  project: "api",
});

// define the loading states
export const ResponseState = {
  LOADING: 'loading',
  ERRORED: 'errored',
  SUCCESS: 'success'
}

export function useDirectus(fn = (client = DirectusSDK, opts) => Promise, opts){
  // save error and response state internally
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    // will call the API with your provided fn
    const fetcher = async () => {
      try {
        const result = await fn(client);
        // set the response if everything's allright
        setResponse(result);
      } catch (err) {
        // set the error if something went wrong
        setError(err);
      }
    }

    // execute!
    fetcher();
  }, [])

  return [
    response,
    error,
    error
      ? ResponseState.ERRORED
      : response
        ? ResponseState.SUCCESS
        : ResponseState.LOADING
  ];
}
