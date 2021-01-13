import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testAction } from '../actions/home_actions';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  console.log(store);
  return (
    <div>
      HELLO WORLD
      <button onClick={() => dispatch(testAction())}>Click me to test</button>
    </div>
  );
}

export default App;
