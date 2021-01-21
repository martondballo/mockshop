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
  container: {
    maxWidth: 540,
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  card: {
    margin: '0 0 8px 8px',
    width: 200,
  },
  productImage: {
    height: 300,
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
    <div className={styles.container}>
      {products.map((product, index) => (
        <Card key={index} className={styles.card}>
          <CardActionArea>
            <CardMedia className={styles.productImage} image={product.image} />
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
      ))}
    </div>
  );
}
