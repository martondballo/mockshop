import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testAction, getProducts } from '../actions/home_actions';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  useEffect(() => dispatch(getProducts()), [dispatch]);
  console.log(store);
  return (
    <div>
      HELLO WORLD
      <button onClick={() => dispatch(testAction())}>Click me to test</button>
    </div>
  );
}

export default App;
