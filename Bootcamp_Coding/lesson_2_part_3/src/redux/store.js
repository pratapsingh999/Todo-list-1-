import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"
const initialState = {
    counter: 0,
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})

const dispatchAction = (actionType, payload) => {
    const action = {
        type: actionType,
        payload
    }
    store.dispatchAction(action);
}

export const ReduxStore = {
    store,
    // dispatch: dispatchAction,
}
export default ReduxStore;