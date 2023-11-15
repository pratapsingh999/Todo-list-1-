// App.js

import React from 'react';
import { Provider } from 'react-redux';
import MatrixComponent from './Components/MatrixComponent';
import store from './redux/store';
import FrameWorkParameters from './Components/FrameworkParameters';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <FrameWorkParameters />

            </div>
        </Provider>
    );
};

export default App;
