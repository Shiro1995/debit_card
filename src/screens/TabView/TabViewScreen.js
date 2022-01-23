import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';

import {assets} from '../../common/theme';
import {MAIN_TABS, TAB_NAME} from '../../common/constant';
import {
  defaultOptions,
  hideHeaderOptions,
} from '../../navigation/navigationOptions';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';

const Tab = createBottomTabNavigator();

const tabScreenOptions = ({route}) => ({
  tabBarIcon: () => {
    let iconSrc = assets.aspireLogoGrey;
    switch (route.name) {
      case TAB_NAME.card.name:
        iconSrc = assets.debitCard;
        break;
      case TAB_NAME.payment.name:
        iconSrc = assets.payments;
        break;
      case TAB_NAME.credit.name:
        iconSrc = assets.credit;
        break;
      case TAB_NAME.profile.name:
        iconSrc = assets.user;
        break;
      default:
        iconSrc = assets.aspireLogoGrey;
    }
    return (
      <View>
        <Image source={iconSrc} />
      </View>
    );
  },
  tabBarStyle: {
    paddingBottom: 8,
    paddingTop: 9,
    height: 56,
  },
  tabBarLabelStyle: route.name === TAB_NAME.card.name ? styles.titleSelectedTab : styles.titleTab,
  tabBarButton: props => <Pressable {...props} onPress={() => {}} />,
});

const TabViewScreen = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={tabScreenOptions}
        initialRouteName={MAIN_TABS[1].name}>
        {MAIN_TABS.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{...tab.options}}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default TabViewScreen;
