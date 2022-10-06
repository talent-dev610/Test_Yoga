import React from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigation from './MainNavigation';

export const AppContainer = createAppContainer(MainNavigation);

export const YogaApp = () => {
  return (
    <React.Fragment>
      <AppContainer />
    </React.Fragment>
  );
};
