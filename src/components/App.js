import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from '../actions/action';


function App() {
  const selector = useSelector((state) => state.updateValueReducer);
  const dispatch = useDispatch();

  return (
    <div id='main'>
      <div data-testid='counter'>Counter : {selector}</div>
      <button onClick={() => dispatch(incNumber())}>+</button>
      <button onClick={() => dispatch(decNumber())}>-</button>
    </div>
  );
}

export default App;
