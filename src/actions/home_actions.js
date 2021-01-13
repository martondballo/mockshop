export const testAction = () => ({ type: 'TEST_ACTION' });

export const getProducts = () => dispatch => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      dispatch(populateProducts(json));
    });
};

const populateProducts = products => ({
  type: `POPULATE_PRODUCTS`,
  payload: products,
});
