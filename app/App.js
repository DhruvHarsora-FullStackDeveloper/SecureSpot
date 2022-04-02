/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppNavigation from './navigation/AppNavigation';
import reduxStore from './redux/Store';
import { applicationStyles } from './theme';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
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
