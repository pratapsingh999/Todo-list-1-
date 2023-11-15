import React from 'react';
import ReduxCounter from "./Components/ReduxCounter/index"
const App = ({ count, dispatch }) => {
    return (
        <>
            <ReduxCounter count={count} dispatch={dispatch} />
        </>
    )
}

export default App;