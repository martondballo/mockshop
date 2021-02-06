import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import { PAGES } from '../reducers/appReducer';
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

<<<<<<< HEAD
  const { activePage } = useSelector(state => state.app);
=======
  const { selectedCategory, activePage } = useSelector(state => state.app);
>>>>>>> App shows page based on activePage

  useEffect(() => dispatch(getProducts()), [dispatch]);

  const renderPage = () => {
    switch (activePage) {
      case PAGES.HOME:
        return <CategoriesList />;
      case PAGES.CATEGORY:
<<<<<<< HEAD
        return <Category />;
      case PAGES.PRODUCT:
        return <Product />;
=======
        return <Category selectedCategory={selectedCategory} />;
>>>>>>> App shows page based on activePage
      default:
        return <CategoriesList />;
    }
  };

  return <div className={styles.app}>{renderPage()}</div>;
}

export default App;
