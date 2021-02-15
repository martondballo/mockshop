import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import { PAGES } from '../reducers/appReducer';
import NavBar from './NavBar.react';
import CategoriesList from './CategoriesList.react';
import Product from './Product.react';
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

  const { activePage } = useSelector(state => state.app);

  useEffect(() => dispatch(getProducts()), [dispatch]);

  const renderPage = () => {
    switch (activePage) {
      case PAGES.HOME:
        return <CategoriesList />;
      case PAGES.CATEGORY:
        return <Category />;
      case PAGES.PRODUCT:
        return <Product />;
      default:
        return <CategoriesList />;
    }
  };

  return (
    <div className={styles.app}>
      <NavBar />
      {renderPage()}
    </div>
  );
}

export default App;
