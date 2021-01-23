import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../actions/appActions';
import {
  makeStyles,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  cardContainer: {
    padding: 4,
    width: 270,
    boxSizing: 'border-box',
  },
  categoryImage: {
    height: 300,
    padding: 5,
    backgroundSize: 'contain',
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function CategoriesList() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );

  const categoryClickHandler = category => {
    dispatch(setCategory(category));
  };

  return (
    <div className={styles.container}>
      {productsByCategory != null ? (
        Object.keys(productsByCategory).map((category, index) => {
          return (
            <div className={styles.cardContainer}>
              <Card key={index}>
                <CardActionArea onClick={() => categoryClickHandler(category)}>
                  <CardMedia
                    className={styles.categoryImage}
                    image={productsByCategory[category][0].image}
                  />
                  <CardContent>
                    <Typography
                      variant='h6'
                      color='primary'
                      className={styles.titleCase}
                    >
                      {category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })
      ) : (
        <CircularProgress size={24} />
      )}
    </div>
  );
}
