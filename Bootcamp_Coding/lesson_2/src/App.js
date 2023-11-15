import React from 'react';
import { Provider } from 'react-redux';
import ReactCounter from './components/ReactCounter';
import ReduxCounter from './components/ReduxCounter';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ReactCounter />
      <ReduxCounter />
    </Provider>
  );
}

export default App;
