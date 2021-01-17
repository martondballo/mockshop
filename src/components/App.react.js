import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/products_actions';
import CategoriesList from './CategoriesList.react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <>
      <CategoriesList />
    </>
  );
}

export default App;
