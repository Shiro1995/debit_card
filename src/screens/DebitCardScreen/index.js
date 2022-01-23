import React from 'react';
import {SPENDING_LIMIT_SCREEN} from '../../navigation/screenName';

import DebitCardScreen from './DebitCardScreen';

const DebitCard = ({navigation}) => {
  const onNavigate = () => {
    navigation.navigate(SPENDING_LIMIT_SCREEN);
  };

  return <DebitCardScreen onNavigate={onNavigate} />;
};

export default DebitCard;
