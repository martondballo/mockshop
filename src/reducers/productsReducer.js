import { POPULATE_PRODUCTS } from '../actions/productsActions';

const initialState = {
  products: [],
  productsByCategory: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_PRODUCTS:
      // turns {products: [[product]]} into {[category]: [[product]]}
      const productsByCategory = action.payload.reduce(
        (accumulator, product) => {
          const category = product.category;
          return {
            ...accumulator,
            [category]: [...(accumulator[category] || []), product],
          };
        },
        {}
      );
      return { ...state, products: action.payload, productsByCategory };

    default:
      return state;
  }
}
