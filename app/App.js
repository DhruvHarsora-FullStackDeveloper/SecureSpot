/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppNavigation from './navigation/AppNavigation';
import reduxStore from './redux/Store';
import { applicationStyles } from './theme';

const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <PersistGate persistor={reduxStore.persistor}>
        <SafeAreaView style={applicationStyles.container}>
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;
