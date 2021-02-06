export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCT = 'SET_PRODUCT';

export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  categoryName,
});

export const setProduct = productID => ({
  type: SET_PRODUCT,
  productID,
});
