import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogBox } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationStrings } from '../constants';
import { IntroScreen, LoginScreen, RegisterScreen } from '../module';
import { onBoardSelectors } from '../redux/KeyRedux';
import { onUserSelectors } from '../redux/UserRedux';
import TabBottomNavigation from './TabNavigation';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

const AppNavigation = () => {
  const getOnBoard = useSelector(onBoardSelectors.getOnBoardData);
  const getRegister = useSelector(onUserSelectors.getUserData);
  console.log(getRegister);
  return (
    <NavigationContainer>
      {getRegister === null || getRegister?.result === 0 ? (
        <Stack.Navigator>
          {getOnBoard ? (
            <Stack.Screen
              name={NavigationStrings.INTRO}
              component={IntroScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name={NavigationStrings.LOGIN}
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={NavigationStrings.REGISTER}
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={NavigationStrings.TABS}
                component={TabBottomNavigation}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      ) : (
        <TabBottomNavigation />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
