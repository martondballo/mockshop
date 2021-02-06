import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../actions/appActions';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  categoryTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  container: {
    maxWidth: 540,
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  titleCase: {
    textTransform: 'capitalize',
  },
  cardContainer: {
    padding: 4,
    width: 270,
    boxSizing: 'border-box',
  },
  productImage: {
    height: 300,
    padding: 5,
    backgroundSize: 'contain',
  },
  productName: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

export default function Category() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { selectedCategoryName } = useSelector(state => state.app);
  const products = useSelector(
    state => state.products.productsByCategory[selectedCategoryName]
  );

  const productClickHandler = productID => {
    dispatch(setProduct(productID));
  };

  return (
    <>
      <div className={styles.categoryTitle}>
        <Typography variant='h3' className={styles.titleCase}>
          {selectedCategoryName}
        </Typography>
      </div>
      <div className={styles.container}>
        {products.map(product => (
          <div className={styles.cardContainer}>
            <Card key={product.id}>
              <CardActionArea onClick={() => productClickHandler(product.id)}>
                <CardMedia
                  className={styles.productImage}
                  image={product.image}
                />
                <CardContent>
                  <Typography
                    variant='h6'
                    color='primary'
                    className={styles.productName}
                  >
                    {product.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
