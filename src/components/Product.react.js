import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  centeredFlex: {
    display: 'flex',
    justifyContent: 'center',
  },
  productContainer: {
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  productImageContainer: {
    height: 300,
    flex: 1,
    padding: 5,
    backgroundSize: 'contain',
    backgroundColor: 'pink',
  },
  productDetailsContainer: {
    flex: 3,
    paddingLeft: 8,
  },
  productDetailRow: {
    marginBottom: 16,
  },
});

export default function Product() {
  const styles = useStyles();

  const { selectedProductID } = useSelector(state => state.app);
  const product = useSelector(
    state => state.products.productsByID[selectedProductID]
  );

  const { title, description, price } = product;

  return (
    <div className={styles.centeredFlex}>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}></div>
        <div className={styles.productDetailsContainer}>
          <div className={styles.productDetailRow}>
            <Typography variant='h4'>{title}</Typography>
          </div>
          <div className={styles.productDetailRow}>
            <Typography color='textSecondary'>{description}</Typography>
          </div>
          <div className={styles.productDetailRow}>
            <Typography>Price: ${price}</Typography>
          </div>
          <div className={styles.productDetailRow}>
            <Button variant='contained' color='primary'>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
