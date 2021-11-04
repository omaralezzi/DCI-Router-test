import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import useFetch from '../../customHooks/useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const initialState = { results: {}, loading: true, error: '' };

  const { results, loading, error } = useFetch(url, initialState);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  return (
    <section className='details'>
      <p>{results.title}</p>
      <img src={results.thumbnailUrl} alt={results.title} />
      <button onClick={() => history.goBack()}>Return</button>
    </section>
  );
};

export default ProductDetail;
