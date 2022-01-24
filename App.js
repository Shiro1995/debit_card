import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {rootNavigationRef} from './src/navigation/navigationOptions';
import {makeServer} from './src/store/mockApi';
import rootStack from './src/navigation';
import store from './src/store';

const App = () => {
  if (process.env.NODE_ENV === 'development') {
    if (window.server) {
      window.server.shutdown();
    }
    window.server = makeServer();
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {rootStack}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
