import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  opaqueOverlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    opacity: '0.8',
    zIndex: 10,
  },
});

function SearchResults() {
  // const dispatch = useDispatch();
  const styles = useStyles();

  const { searchTerm } = useSelector(state => state.app);
  const { products } = useSelector(state => state.products);

  const searchMatches =
    searchTerm.length >= 3
      ? products.filter(
          product =>
            product.title.includes(searchTerm) ||
            product.category.includes(searchTerm) ||
            product.description.includes(searchTerm)
        )
      : [];

  return <div className={styles.opaqueOverlay}></div>;
}

export default SearchResults;
