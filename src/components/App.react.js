import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/products_actions';
import CategoriesList from './CategoriesList.react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <div className={styles.app}>
      <CategoriesList />
    </div>
  );
}

export default App;
