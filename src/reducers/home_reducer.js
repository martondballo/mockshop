export default function home(state = {}, action) {
  switch (action.type) {
    case 'TEST_ACTION':
      return { ...state, test: 'done' };
    case 'POPULATE_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
