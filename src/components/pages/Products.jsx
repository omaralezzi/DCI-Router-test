import React from 'react';

import { Link } from 'react-router-dom';

import useFetch from '../../customHooks/useFetch';

const Products = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15';
  const initialState = { results: [], loading: true, error: null };

  const { results, loading, error } = useFetch(url, initialState);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  const items = results.map((item) => (
    <li key={item.id}>
      <Link to={`/product-detail/${item.id}`}>
        <p>{item.title}</p>
      </Link>
    </li>
  ));

  return <section>{items}</section>;
};

export default Products;
