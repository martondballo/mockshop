import React from 'react';
import { useSelector } from 'react-redux';
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

export default function Category({ selectedCategory }) {
  const styles = useStyles();

  const products = useSelector(
    state => state.products.productsByCategory[selectedCategory]
  );

  return (
    <>
      <div className={styles.categoryTitle}>
        <Typography variant='h3' className={styles.titleCase}>
          {selectedCategory}
        </Typography>
      </div>
      <div className={styles.container}>
        {products.map((product, index) => (
          <div className={styles.cardContainer}>
            <Card key={index}>
              <CardActionArea>
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
