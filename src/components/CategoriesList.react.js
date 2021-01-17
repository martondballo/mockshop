import React from 'react';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { toTitleCase } from '../utils';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    marginLeft: 8,
    width: 200,
  },
  categoryImage: {
    height: 200,
  },
});

export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {productsByCategory != null ? (
        Object.keys(productsByCategory).map((category, index) => {
          return (
            <Card key={index} className={styles.card}>
              <CardActionArea>
                <CardMedia
                  className={styles.categoryImage}
                  image={productsByCategory[category][0].image}
                />
                <CardContent>
                  <Typography variant='h6' color='primary'>
                    {toTitleCase(category)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })
      ) : (
        <CircularProgress size={24} />
      )}
    </div>
  );
}
