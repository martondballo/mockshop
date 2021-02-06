import { SET_CATEGORY, SET_PRODUCT } from '../actions/appActions';

export const PAGES = {
  HOME: 'HOME',
  CATEGORY: 'CATEGORY',
  PRODUCT: 'PRODUCT',
};

const initialState = {
  activePage: PAGES.HOME,
  selectedCategory: null,
  selectedProduct: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        activePage: PAGES.CATEGORY,
        selectedCategory: action.categoryName,
      };
    case SET_PRODUCT:
      return {
        ...state,
        activePage: PAGES.PRODUCT,
        selectedProduct: action.productID,
      };
    default:
      return state;
  }
}
