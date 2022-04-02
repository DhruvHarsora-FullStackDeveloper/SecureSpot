/* eslint-disable react-native/no-inline-styles */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import Icons from '../assets/icons';
import { NavigationStrings } from '../constants';
import HomeStackScreen from '../navigation/HomeStack';
import { Colors, Metrics } from '../theme';
import FileStackScreen from './FileStack';
import ProfileStackScreen from './ProfileStack';

const { verticalScale, horizontalScale } = Metrics;

const Tab = createMaterialBottomTabNavigator();

const TabBottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.TAB_VAULT_SCREEN}
      barStyle={{ backgroundColor: Colors.themeColor }}>
      <Tab.Screen
        name={NavigationStrings.TAB_VAULT_SCREEN}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Vault',
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={{
                width: horizontalScale(24),
                height: verticalScale(24),
                tintColor: focused ? Colors.white : Colors.gray,
              }}
              source={Icons.security}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.TAB_FILES_SCREEN}
        component={FileStackScreen}
        options={{
          tabBarLabel: 'Files',
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={{
                width: horizontalScale(24),
                height: verticalScale(24),
                tintColor: focused ? Colors.white : Colors.gray,
              }}
              source={Icons.folder}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.TAB_PROFILE_SCREEN}
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={{
                width: horizontalScale(24),
                height: verticalScale(24),
                tintColor: focused ? Colors.white : Colors.gray,
              }}
              source={Icons.profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottomNavigation;
