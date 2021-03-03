import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cartContainer: {
    border: '1px solid #000',
    height: '100%',
  },
});

export default function Cart() {
  const styles = useStyles();
  return <div className={styles.cartContainer}>cart</div>;
}
