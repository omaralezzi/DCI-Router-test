import { useState, useEffect } from 'react';

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const abortFetch = new AbortController();

    fetch(url, { signal: abortFetch.signal })
      .then((response) => response.json())
      .then((data) => setData({ results: data, loading: false, error: null }))
      .catch((error) => {
        abortFetch.signal.aborted
          ? console.log('Fetch aborted')
          : setData({ error: error.message });
      });

    return () => abortFetch.abort();
  }, [url]);
  return data;
};

export default useFetch;
