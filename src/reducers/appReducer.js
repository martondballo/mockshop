import {
  SET_CATEGORY,
  SET_PRODUCT,
  NAVIGATE_TO_HOME_PAGE,
  TOGGLE_SEARCH_MODE,
  UPDATE_SEARCH_TERM,
} from '../actions/appActions';

export const PAGES = {
  HOME: 'HOME',
  CATEGORY: 'CATEGORY',
  PRODUCT: 'PRODUCT',
};

const initialState = {
  activePage: PAGES.HOME,
  selectedCategoryName: null,
  selectedProductID: null,
  isSearchModeActive: false,
  searchTerm: '',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        activePage: PAGES.CATEGORY,
        selectedCategoryName: action.categoryName,
      };
    case SET_PRODUCT:
      return {
        ...state,
        activePage: PAGES.PRODUCT,
        selectedProductID: action.productID,
      };
    case NAVIGATE_TO_HOME_PAGE:
      return {
        ...state,
        activePage: PAGES.HOME,
        selectedCategoryName: null,
        selectedProductID: null,
      };
    case TOGGLE_SEARCH_MODE:
      return {
        ...state,
        isSearchModeActive: !state.isSearchModeActive,
      };
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    default:
      return state;
  }
}
