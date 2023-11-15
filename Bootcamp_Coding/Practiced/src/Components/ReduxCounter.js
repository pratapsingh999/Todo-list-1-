import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { incrementCounter, decrementCounter } from "../redux/action"

const ReduxCounter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <h1>ReduxCounter</h1>
            <p>Count : {count}</p>
            {/* <div>
                <button onClick={() => dispatch(incrementCounter())}>Increment</button>
                <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
            </div> */}
        </>
    )
}

export default ReduxCounter;