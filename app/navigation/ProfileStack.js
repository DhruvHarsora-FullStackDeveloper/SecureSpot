import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationStrings } from '../constants';
import { TabProfileScreen } from '../module/';
const Stack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationStrings.PROFILE_SCREEN}
        component={TabProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
