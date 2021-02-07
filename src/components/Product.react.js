import React from 'react';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from '@material-ui/core';

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
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  productDetailsContainer: {
    flex: 3,
    paddingLeft: 8,
  },
  productDetailRow: {
    marginBottom: 16,
  },
  form: {
    width: '50px',
    marginRight: '8px',
  },
});

export default function Product() {
  const styles = useStyles();

  const { selectedProductID, selectedCategoryName } = useSelector(
    state => state.app
  );
  const product = useSelector(
    state => state.products.productsByID[selectedProductID]
  );

  const isClothingCategory =
    selectedCategoryName === 'men clothing' ||
    selectedCategoryName === 'women clothing';

  const { title, description, price, image } = product;

  return (
    <div className={styles.centeredFlex}>
      <div className={styles.productContainer}>
        <div
          className={styles.productImageContainer}
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
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
            {isClothingCategory && (
              <FormControl className={styles.form}>
                <InputLabel id='size-label'>Size</InputLabel>
                <Select labelId='Size' id='size-select' value='M'>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                </Select>
              </FormControl>
            )}
            <FormControl className={styles.form}>
              <InputLabel htmlFor='quantity'>Quantity</InputLabel>
              <Input id='quantity' type='number' defaultValue={1} />
            </FormControl>
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
