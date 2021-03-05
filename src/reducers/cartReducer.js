import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
  itemsInCart: {},
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItemKey = `${action.payload.id}_${action.payload.size}`;
      return {
        ...state,
        itemsInCart: {
          ...state.itemsInCart,
          [cartItemKey]:
            (state.itemsInCart[cartItemKey] || 0) + action.payload.qty,
        },
      };
    default:
      return state;
  }
}
