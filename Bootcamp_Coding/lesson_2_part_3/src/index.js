import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, connect } from "react-redux";
import App from "./App";
import { ReduxStore } from "./redux/store";

const root = createRoot(document.getElementById('root'));

const mapStateToProp = (state) => ({
    count: state.counter,
    // dispatch: ReduxStore.dispatch
});

const ConnectedApp = connect(mapStateToProp)(App);

root.render(
    <Provider store={ReduxStore.store}>
        <ConnectedApp />
    </Provider>
);