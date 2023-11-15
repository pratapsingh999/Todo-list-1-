import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../redux/action';

function ReduxCounter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter</h1>
      <p>
        Count:
        {count}
      </p>
      <button type="button" onClick={() => dispatch(incrementCounter())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrementCounter())}>
        Decrement
      </button>
    </div>
  );
}

export default ReduxCounter;
