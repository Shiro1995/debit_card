import {
  defaultOptions,
  hideHeaderOptions,
} from '../../navigation/navigationOptions.js';
import DebitCard from '../../screens/DebitCardScreen/index.js';
import Empty from '../../screens/EmptyScreen/index.js';

export const TAB_NAME = {
  home: {
    name: 'Home',
    component: Empty,
    options: hideHeaderOptions,
  },
  card: {
    name: 'Debit Card',
    component: DebitCard,
    options: hideHeaderOptions,
  },
  payment: {
    name: 'Payment',
    component: Empty,
    options: hideHeaderOptions,
  },
  credit: {
    name: 'Credit',
    component: Empty,
    options: hideHeaderOptions,
  },
  profile: {
    name: 'Profile',
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

export const CONTENT = {
  DebitCard: 'Debit Card',
  AvailableBalance: 'Available Balance',
  S$: 'S$',
  HideCardNumber: 'Hide card number',
  Thru: 'Thru',
  CVV: 'CVV',
  TopUp: 'Top-up account',
  WeeklySpendingLimit: 'Weekly spending limit',
  FreezeCard: 'Free card',
  GetANewCard: 'Get a new card',
  DeActivatedCards: 'DeActivated cards',
  SpendingLimit: 'Spending limit',
  SetAWeekly: 'Set a weekly debit card spending limit',
  HereWeeklyMeans: 'Here weekly means the last 7 days not the calendar week',
  Save: 'Save',
  Home: 'Home',
  DebitCard: 'Debit card',
  Payment: 'Payment',
  Credit: 'Credit',
  Profile: 'Profile',
}