import React, {useEffect} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../scenes/main/MainScreen';
import CareScreen from '../scenes/main/care/CareScreen';
import DailyFuelScreen from '../scenes/main/dailyFuel/DailyFuelScreen';
import GrowScreen from '../scenes/main/grow/GrowScreen';
import JourneyScreen from '../scenes/main/journey/JourneyScreen';
import MeScreen from '../scenes/main/me/MeScreen';

const MainNavigation = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
    },
    CareScreen: {
      screen: CareScreen,
    },
    DailyFuelScreen: {
      screen: DailyFuelScreen,
    },
    GrowScreen: {
      screen: GrowScreen,
    },
    JourneyScreen: {
      screen: JourneyScreen,
    },
    MeScreen: {
      screen: MeScreen,
    },
  },
  {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
);

export default MainNavigation;
