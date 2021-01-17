import React from 'react';
import { useSelector } from 'react-redux';

export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );

  return <>{productsByCategory != null ? 'categories' : 'loading'}</>;
}
