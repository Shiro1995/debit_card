import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabView from '../screens/TabView';
import * as SCREEN_NAME from './screenName';
import { hideHeaderOptions} from './navigationOptions';
import DebitCardScreen from '../screens/DebitCardScreen';
import SpendingLimitScreen from '../screens/SpendingLimitScreen/';

const Stack = createNativeStackNavigator();

const screenMapping = Object.freeze({
  [SCREEN_NAME.CREDIT_CARD_SCREEN]: {
    component: DebitCardScreen,
    options: hideHeaderOptions,
  },
  [SCREEN_NAME.SPENDING_LIMIT_SCREEN]: {
    component: SpendingLimitScreen,
    options: hideHeaderOptions,
  },
  [SCREEN_NAME.TAB_VIEW_SCREEN]: {
    component: TabView,
    options: hideHeaderOptions,
  },
});

const rootStack = (
  <Stack.Navigator initialRouteName={SCREEN_NAME.TAB_VIEW_SCREEN}>
    <Stack.Group>
      {Object.keys(screenMapping).map(screenName => (
        <Stack.Screen
          key={screenName}
          name={screenName}
          component={screenMapping[screenName].component}
          options={screenMapping[screenName].options}
        />
      ))}
    </Stack.Group>
  </Stack.Navigator>
);

export default rootStack;
