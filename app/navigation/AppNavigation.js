import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationStrings } from '../constants';
import { LoginScreen } from '../module';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationStrings.LOGIN}
          component={LoginScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
