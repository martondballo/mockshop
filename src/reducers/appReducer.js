import { SET_CATEGORY, SET_PRODUCT } from '../actions/appActions';

const initialState = {
  selectedCategory: null,
  selectedProduct: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.categoryName,
      };
    case SET_PRODUCT:
      return {
        ...state,
        selectedProduct: action.productID,
      };
    default:
      return state;
  }
}
