// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Create the store with the root reducer
const { createStore } = Redux;
const store = createStore(counterReducer);

// Dispatch actions to update the state
store.dispatch(increment());
store.dispatch(decrement());

// Get the current state
const currentState = store.getState();
