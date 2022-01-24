import React from 'react';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {makeServer} from './src/store/mockApi';
import rootStack from './src/navigation';
import store from './src/store';

LogBox.ignoreLogs(['Warning: ...']); // Ignore message when call callback function
LogBox.ignoreAllLogs();

const App = () => {
  if (process.env.NODE_ENV === 'development') {
    if (window.server) {
      window.server.shutdown();
    }
    window.server = makeServer();
  }
  return (
    <Provider store={store}>
      <NavigationContainer>{rootStack}</NavigationContainer>
    </Provider>
  );
};

export default App;
