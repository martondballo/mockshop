import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from './CardItem.react';
import { makeStyles, Typography } from '@material-ui/core';

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
          <CardItem
            key={product.id}
            label={product.title}
            imageURL={product.image}
            clickHandler={() => {}}
          />
        ))}
      </div>
    </>
  );
}
