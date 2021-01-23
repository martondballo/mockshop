import { SET_CATEGORY } from '../actions/appActions';

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category,
      };
    default:
      return state;
  }
}
