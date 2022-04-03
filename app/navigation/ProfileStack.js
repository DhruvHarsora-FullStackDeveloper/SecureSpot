import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationStrings } from '../constants';
import { ProfileScreen, EditProfile } from '../module/';

const Stack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationStrings.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={NavigationStrings.EDIT_PROFILE_SCREEN}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
