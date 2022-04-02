import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationStrings } from '../constants';
import { TabFilesScreen } from '../module/';
const Stack = createStackNavigator();
const FileStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationStrings.FILES_SCREEN}
        component={TabFilesScreen}
      />
    </Stack.Navigator>
  );
};
export default FileStackScreen;
