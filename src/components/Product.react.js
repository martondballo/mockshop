import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function Product() {
  const styles = useStyles();
  const { selectedProductID } = useSelector(state => state.app);
  return (
    <div className={styles.productContainer}>
      <h1>{selectedProductID}</h1>
    </div>
  );
}
