import {StatusBar} from 'native-base';
import {Platform} from 'react-native';
import {
  defaultOptions,
  hideHeaderOptions,
} from '../../navigation/navigationOptions.js';
import DebitCard from '../../screens/DebitCardScreen';
import Empty from '../../screens/EmptyScreen';
import assets from '../theme/assets.js';
import {CONTENT} from './string.js';

export const TAB_NAME = {
  home: {
    name: CONTENT.Home,
    component: Empty,
    options: hideHeaderOptions,
  },
  card: {
    name: CONTENT.DebitCard,
    component: DebitCard,
    options: hideHeaderOptions,
  },
  payment: {
    name: CONTENT.Payment,
    component: Empty,
    options: hideHeaderOptions,
  },
  credit: {
    name: CONTENT.Credit,
    component: Empty,
    options: hideHeaderOptions,
  },
  profile: {
    name: CONTENT.Profile,
    component: Empty,
    options: hideHeaderOptions,
  },
};

export const MAIN_TABS = [
  TAB_NAME.home,
  TAB_NAME.card,
  TAB_NAME.payment,
  TAB_NAME.credit,
  TAB_NAME.profile,
];

export const MENU_LIST = [
  {
    id: 1,
    title: CONTENT.TopUp,
    description: CONTENT.DepositMoney,
    isSwitch: false,
    icon: assets.topUp,
  },
  {
    id: 2,
    title: CONTENT.WeeklySpendingLimit,
    description: CONTENT.YourWeekly,
    isSwitch: true,
    icon: assets.gaugeFilled,
  },
  {
    id: 3,
    title: CONTENT.FreezeCard,
    description: CONTENT.YourDebit,
    isSwitch: true,
    icon: assets.freezeCard,
  },
  {
    id: 4,
    title: CONTENT.GetANewCard,
    description: CONTENT.ThisDeactivates,
    isSwitch: false,
    icon: assets.newCard,
  },
  {
    id: 5,
    title: CONTENT.DeActivatedCards,
    description: CONTENT.YourPreviously,
    isSwitch: false,
    icon: assets.deactivate,
  },
];

export const marginTop =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;
