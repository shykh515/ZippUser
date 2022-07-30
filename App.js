import React from 'react';
import { store, persistor } from './src/redux/Store';
import { Provider } from 'react-redux';
import Router from './src/navigation/Router/index';

const App = () => {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  )
}

export default App;
