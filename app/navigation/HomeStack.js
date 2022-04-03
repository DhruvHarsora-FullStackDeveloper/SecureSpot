import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationStrings } from '../constants';
import { TabHomeScreen } from '../module/index';
const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationStrings.VAULT_SCREEN}
        component={TabHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
