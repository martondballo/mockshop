export default function home(state = {}, action) {
  switch (action.type) {
    case 'TEST_ACTION':
      return { ...state, test: 'done' };
    default:
      return state;
  }
}
