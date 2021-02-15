import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';
import Category from './Category.react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { selectedCategory } = useSelector(state => state.app);

  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <div className={styles.app}>
      {selectedCategory != null ? (
        <Category selectedCategory={selectedCategory} />
      ) : (
        <CategoriesList />
      )}
    </div>
  );
}

export default App;
